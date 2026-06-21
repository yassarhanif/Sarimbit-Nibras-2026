import { ProductResult, QueryResponse } from "@/config/proxy";
import { SarimbitSeries, ModelGroup, ColorConfig } from "@/config/products";

// Stock data for one group (e.g. "Dewasa") in one color
export interface GroupStock {
    label: string;
    models: string[];
    sizes: string[];
    // data[sizeIndex][modelIndex] = stock
    data: number[][];
    totalPerModel: number[];
}

// Stock data for one color
export interface ColorStock {
    color: ColorConfig;
    groups: GroupStock[];
}

async function executeQuery(sql: string, params: unknown[] = []): Promise<QueryResponse> {
    const res = await fetch("/api/proxy/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql, params }),
        signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || `Error: ${res.status}`);
    }

    return res.json();
}

/**
 * Test if the proxy API is reachable
 */
export async function testConnection(): Promise<boolean> {
    try {
        const res = await fetch("/api/proxy/health", {
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return false;
        const data = await res.json();
        return data.status === "ok";
    } catch {
        return false;
    }
}

/**
 * Search products by name via the proxy
 */
async function searchProducts(query: string): Promise<ProductResult[]> {
    const res = await executeQuery(
        `SELECT ti.kodeitem AS id, ti.kodeitem AS barcode, ti.namaitem AS name, ts.stok, ti.hargajual1 AS price
         FROM tbl_item ti
         JOIN tbl_itemstok ts ON ti.kodeitem = ts.kodeitem
         WHERE LOWER(ti.namaitem) LIKE LOWER($1)
         ORDER BY ti.namaitem`,
        [`%${query}%`]
    );

    return (res.rows as unknown as Record<string, unknown>[]).map((row) => ({
        id: String(row.id ?? ""),
        barcode: String(row.barcode ?? ""),
        name: String(row.name ?? ""),
        stok: Number(row.stok) || 0,
        stock: Number(row.stok) || 0,
        price: Number(row.price) || 0,
    }));
}

/**
 * Extract size from product name (last word)
 */
function extractSize(name: string): string {
    const parts = name.trim().split(/\s+/);
    return parts[parts.length - 1].toUpperCase();
}

/**
 * Process stock for one group in one color synchronously from fetched products
 */
function processGroupStock(
    products: ProductResult[],
    seriesName: string,
    color: string,
    group: ModelGroup
): GroupStock {
    const modelData: Map<string, Map<string, number>> = new Map();
    const seriesUpper = seriesName.toUpperCase();
    const colorUpper = color.toUpperCase();

    for (const model of group.models) {
        const sizeStockMap = new Map<string, number>();
        const modelWords = model.toUpperCase().split(/\s+/);
        const isModelAnak = model.toUpperCase().includes("ANAK");

        for (const p of products) {
            const nameUpper = p.name.toUpperCase();

            if (!nameUpper.includes(seriesUpper)) {
                continue;
            }

            // Exact color match
            const colorWords = colorUpper.split(/\s+/);
            const matchesColor = colorWords.every(word => nameUpper.includes(word));
            if (!matchesColor) {
                continue;
            }

            // Check if product is "Anak" based on product name - use word boundary to avoid "FANAKU" matching "ANAK"
            const isProductAnak = /\bANAK\b/.test(nameUpper);
            
            // Filter: if model has "Anak", product must have "Anak"
            // if model doesn't have "Anak", product must NOT have "Anak"
            if (isModelAnak !== isProductAnak) {
                continue;
            }

            // Model match
            const matchesModel = modelWords.every(word => nameUpper.includes(word));
            if (!matchesModel) {
                continue;
            }

            // Size match
            const size = extractSize(p.name);
            if (!group.sizes.includes(size)) {
                continue;
            }

            const stock = p.stock ?? p.stok ?? 0;
            sizeStockMap.set(size, (sizeStockMap.get(size) || 0) + stock);
        }

        modelData.set(model, sizeStockMap);
    }

    // Build data array using the predefined sizes from config
    const data: number[][] = [];
    const totalPerModel = new Array(group.models.length).fill(0);

    for (let si = 0; si < group.sizes.length; si++) {
        const row: number[] = [];
        for (let mi = 0; mi < group.models.length; mi++) {
            const sizeMap = modelData.get(group.models[mi]);
            const stock = sizeMap?.get(group.sizes[si]) ?? 0;
            row.push(stock);
            totalPerModel[mi] += stock;
        }
        data.push(row);
    }

    return {
        label: group.label,
        models: group.models,
        sizes: group.sizes,
        data,
        totalPerModel,
    };
}

/**
 * Fetch all stock data for a series, organized by color → groups
 */
export async function getSeriesStock(
    series: SarimbitSeries
): Promise<ColorStock[]> {
    const results: ColorStock[] = [];

    // Fetch ALL products for the series at once
    let allProducts: ProductResult[] = [];
    try {
        allProducts = await searchProducts(series.name);
    } catch (err) {
        console.error(`Failed to fetch series ${series.name}:`, err);
        throw err;
    }

    for (const color of series.colors) {
        const groups: GroupStock[] = [];
        for (const group of series.groups) {
            const gs = processGroupStock(allProducts, series.name, color.name, group);
            groups.push(gs);
        }
        results.push({ color, groups });
    }

    return results;
}

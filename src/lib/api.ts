import { PROXY_URL } from "@/config/proxy";
import { SarimbitSeries, ModelGroup, ColorConfig } from "@/config/products";

export interface ProductResult {
    id: string;
    barcode: string;
    name: string;
    stock: number;
    stok: number;
    price: number;
}

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

/**
 * Test if the proxy API is reachable
 */
export async function testConnection(): Promise<boolean> {
    try {
        const res = await fetch(`${PROXY_URL}/api/database/test-connection`, {
            signal: AbortSignal.timeout(5000),
        });
        const data = await res.json();
        return data.success === true;
    } catch {
        return false;
    }
}

/**
 * Search products by name via the proxy
 */
async function searchProducts(query: string): Promise<ProductResult[]> {
    const res = await fetch(
        `${PROXY_URL}/api/products/search?name=${encodeURIComponent(query)}`,
        { signal: AbortSignal.timeout(15000) }
    );
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
}

/**
 * Extract size from product name (last word)
 */
function extractSize(name: string): string {
    const parts = name.trim().split(/\s+/);
    return parts[parts.length - 1].toUpperCase();
}

/**
 * Fetch stock for one group in one color
 */
async function getGroupStock(
    seriesName: string,
    color: string,
    group: ModelGroup
): Promise<GroupStock> {
    const modelData: Map<string, Map<string, number>> = new Map();

    for (const model of group.models) {
        const query = `${seriesName} ${model} ${color}`;
        const sizeStockMap = new Map<string, number>();

        try {
            const products = await searchProducts(query);
            const seriesUpper = seriesName.toUpperCase();
            const modelUpper = model.toUpperCase();
            const colorUpper = color.toUpperCase();

            for (const p of products) {
                const nameUpper = p.name.toUpperCase();
                if (
                    nameUpper.includes(seriesUpper) &&
                    nameUpper.includes(modelUpper) &&
                    nameUpper.includes(colorUpper)
                ) {
                    const size = extractSize(p.name);
                    // Only include sizes that belong to this group
                    if (group.sizes.includes(size)) {
                        const stock = p.stock ?? p.stok ?? 0;
                        sizeStockMap.set(size, (sizeStockMap.get(size) || 0) + stock);
                    }
                }
            }
        } catch (err) {
            console.error(`Failed to fetch ${query}:`, err);
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

    for (const color of series.colors) {
        const groups: GroupStock[] = [];
        for (const group of series.groups) {
            const gs = await getGroupStock(series.name, color.name, group);
            groups.push(gs);
        }
        results.push({ color, groups });
    }

    return results;
}

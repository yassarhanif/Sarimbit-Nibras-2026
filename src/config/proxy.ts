export const PROXY_URL =
    process.env.NEXT_PUBLIC_PROXY_URL || "https://server-ipos-5-komputer-bawah.tailed4eee.ts.net";

export const API_KEY =
    process.env.NEXT_PUBLIC_API_KEY || "key_untuk_dashboard";

export interface ProductResult {
    id: string;
    barcode: string;
    name: string;
    stock: number;
    stok: number;
    price: number;
}

export interface QueryResponse {
    success: boolean;
    rows: Record<string, unknown>[];
    rowCount: number;
    duration: string;
    truncated?: boolean;
}

import { NextRequest, NextResponse } from "next/server";

const PROXY_URL =
    process.env.NEXT_PUBLIC_PROXY_URL || "https://server-ipos-5-komputer-bawah.tailed4eee.ts.net";
const API_KEY =
    process.env.NEXT_PUBLIC_API_KEY || "key_untuk_dashboard";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const res = await fetch(`${PROXY_URL}/api/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": API_KEY,
            },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(15000),
        });

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json(
            { success: false, error: err instanceof Error ? err.message : "Request failed" },
            { status: 502 }
        );
    }
}

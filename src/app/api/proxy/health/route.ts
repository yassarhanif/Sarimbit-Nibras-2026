import { NextResponse } from "next/server";

const PROXY_URL =
    process.env.NEXT_PUBLIC_PROXY_URL || "https://server-ipos-5-komputer-bawah.tailed4eee.ts.net";

export async function GET() {
    try {
        const res = await fetch(`${PROXY_URL}/health`, {
            signal: AbortSignal.timeout(5000),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch {
        return NextResponse.json({ status: "error", timestamp: new Date().toISOString() }, { status: 502 });
    }
}

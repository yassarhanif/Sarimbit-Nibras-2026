// Proxy API running on Tailscale network (iPos 5 database)
// Using Tailscale Funnel to expose the proxy publicly
export const PROXY_URL =
    process.env.NEXT_PUBLIC_PROXY_URL || "https://server-ipos-5-komputer-bawah.tailed4eee.ts.net";

// Proxy API running on the Tailscale network (iPos 5 database)
// The person viewing this app must be on the same Tailscale network.
export const PROXY_URL =
    process.env.NEXT_PUBLIC_PROXY_URL || "http://100.119.200.6:3002";

"use client";

import { useState, useEffect } from "react";
import { testConnection } from "@/lib/api";
import JumpMenu from "./JumpMenu";
import styles from "./Header.module.css";

export default function Header() {
    const [connected, setConnected] = useState<boolean | null>(null);

    useEffect(() => {
        async function check() {
            const ok = await testConnection();
            setConnected(ok);
        }
        check();
        const interval = setInterval(check, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <h1 className={styles.title}>Sarimbit 2025</h1>
                    <div className={styles.status}>
                        <div
                            className={`${styles.dot} ${connected === null
                                ? styles.checking
                                : connected
                                    ? styles.online
                                    : styles.offline
                                }`}
                        />
                        <span className={styles.statusText}>
                            {connected === null
                                ? "Memeriksa..."
                                : connected
                                    ? "Terhubung"
                                    : "Tidak Terhubung"}
                        </span>
                    </div>
                </div>
                <JumpMenu />
            </div>
        </header>
    );
}

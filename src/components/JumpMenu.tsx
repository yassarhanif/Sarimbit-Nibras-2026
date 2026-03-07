"use client";

import { useState, useRef, useEffect } from "react";
import { SARIMBIT_SERIES } from "@/config/products";
import styles from "./JumpMenu.module.css";

export default function JumpMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function jumpToSeries(name: string) {
        const el = document.getElementById(`series-${name}`);
        if (el) {
            const headerOffset = 80;
            const rect = el.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;
            window.scrollTo({ top: absoluteTop - headerOffset, behavior: "instant" });
        }
        setOpen(false);
    }

    return (
        <div className={styles.menu} ref={menuRef}>
            <button className={styles.trigger} onClick={() => setOpen(!open)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Artikel
            </button>
            {open && (
                <div className={styles.dropdown}>
                    {SARIMBIT_SERIES.map((series) => (
                        <button
                            key={series.name}
                            className={styles.item}
                            onClick={() => jumpToSeries(series.name)}
                        >
                            {series.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

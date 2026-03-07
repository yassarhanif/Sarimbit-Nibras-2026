"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SarimbitSeries } from "@/config/products";
import { ColorStock, getSeriesStock } from "@/lib/api";
import StockTable from "./StockTable";
import styles from "./SeriesCard.module.css";

interface SeriesCardProps {
    series: SarimbitSeries;
}

export default function SeriesCard({ series }: SeriesCardProps) {
    const [colorStocks, setColorStocks] = useState<ColorStock[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);
                const result = await getSeriesStock(series);
                if (!cancelled) setColorStocks(result);
            } catch (err) {
                if (!cancelled)
                    setError(
                        err instanceof Error ? err.message : "Gagal memuat data stok"
                    );
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [series]);

    const handleImageError = (colorName: string) => {
        setFailedImages((prev) => new Set(prev).add(colorName));
    };

    if (loading) {
        return (
            <div className={styles.card}>
                <div className={styles.loadingState}>
                    <div className={styles.spinner} />
                    <span>Memuat stok {series.name}...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.card}>
                <div className={styles.errorState}>{error}</div>
            </div>
        );
    }

    return (
        <>
            {colorStocks.map((cs) => (
                <div key={cs.color.name} className={styles.card} id={`series-${series.name}`}>
                    {/* Header: Image + Title */}
                    <div className={styles.cardHeader}>
                        <div className={styles.imageBox}>
                            {cs.color.image && !failedImages.has(cs.color.name) ? (
                                <Image
                                    src={cs.color.image}
                                    alt={`${series.name} ${cs.color.name}`}
                                    width={400}
                                    height={500}
                                    className={styles.image}
                                    onError={() => handleImageError(cs.color.name)}
                                    unoptimized
                                />
                            ) : (
                                <div className={styles.imagePlaceholder}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className={styles.titleBlock}>
                            <h2 className={styles.seriesName}>{series.name}</h2>
                            <span className={styles.colorBadge}>{cs.color.name}</span>
                        </div>
                    </div>

                    {/* Tables */}
                    <div className={styles.tablesArea}>
                        {/* Kids groups side by side */}
                        {(() => {
                            const adultGroups = cs.groups.filter(
                                (g) => g.label === "Dewasa"
                            );
                            const kidsGroups = cs.groups.filter(
                                (g) => g.label !== "Dewasa"
                            );
                            return (
                                <>
                                    {adultGroups.map((g) => (
                                        <StockTable key={g.label} group={g} />
                                    ))}
                                    {kidsGroups.length > 0 && (
                                        <div className={styles.kidsRow}>
                                            {kidsGroups.map((g) => (
                                                <div key={g.label} className={styles.kidsCol}>
                                                    <StockTable group={g} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                </div>
            ))}
        </>
    );
}

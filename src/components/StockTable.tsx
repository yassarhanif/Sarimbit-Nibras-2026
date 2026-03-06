"use client";

import { GroupStock } from "@/lib/api";
import styles from "./StockTable.module.css";

interface StockTableProps {
    group: GroupStock;
}

function getStockClass(stock: number): string {
    if (stock === 0) return styles.outOfStock;
    if (stock <= 3) return styles.lowStock;
    return styles.inStock;
}

export default function StockTable({ group }: StockTableProps) {
    const grandTotal = group.totalPerModel.reduce((a, b) => a + b, 0);

    return (
        <div className={styles.groupBlock}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.sizeHeader}>Size</th>
                            {group.models.map((model) => (
                                <th key={model} className={styles.modelHeader}>
                                    {model}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {group.sizes.map((size, si) => (
                            <tr key={size}>
                                <td className={styles.sizeCell}>{size}</td>
                                {group.data[si].map((stock, mi) => (
                                    <td
                                        key={mi}
                                        className={`${styles.stockCell} ${getStockClass(stock)}`}
                                    >
                                        {stock}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className={styles.totalRow}>
                            <td className={styles.totalLabel}>Total</td>
                            {group.totalPerModel.map((total, mi) => (
                                <td key={mi} className={styles.totalCell}>
                                    {total}
                                </td>
                            ))}
                        </tr>
                        {group.models.length > 1 && (
                            <tr className={styles.grandTotalRow}>
                                <td className={styles.totalLabel}>Semua</td>
                                <td
                                    className={styles.grandTotalCell}
                                    colSpan={group.models.length}
                                >
                                    {grandTotal}
                                </td>
                            </tr>
                        )}
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

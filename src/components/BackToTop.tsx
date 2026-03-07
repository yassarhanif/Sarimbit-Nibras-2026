"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
    const [canGoUp, setCanGoUp] = useState(false);
    const [canGoDown, setCanGoDown] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        function updateNav() {
            const cards = document.querySelectorAll('[id^="series-"]');
            if (cards.length === 0) return;

            let currentIndex = -1;
            const viewportCenter = window.scrollY + window.innerHeight / 2;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardTop = rect.top + window.scrollY;
                const cardBottom = cardTop + rect.height;
                if (viewportCenter >= cardTop && viewportCenter < cardBottom) {
                    currentIndex = index;
                }
            });

            setCanGoUp(currentIndex > 0);
            setCanGoDown(currentIndex >= 0 && currentIndex < cards.length - 1);
        }

        updateNav();

        window.addEventListener("scroll", updateNav);
        window.addEventListener("resize", updateNav);

        return () => {
            window.removeEventListener("scroll", updateNav);
            window.removeEventListener("resize", updateNav);
        };
    }, []);

    function scrollToPrev() {
        const cards = document.querySelectorAll('[id^="series-"]');
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const headerOffset = 80;

        for (let i = cards.length - 1; i >= 0; i--) {
            const rect = cards[i].getBoundingClientRect();
            const cardTop = rect.top + window.scrollY;
            if (cardTop < viewportCenter - 100) {
                window.scrollTo({ top: cardTop - headerOffset, behavior: "instant" });
                break;
            }
        }
    }

    function scrollToNext() {
        const cards = document.querySelectorAll('[id^="series-"]');
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const headerOffset = 80;

        for (let i = 0; i < cards.length; i++) {
            const rect = cards[i].getBoundingClientRect();
            const cardTop = rect.top + window.scrollY;
            if (cardTop > viewportCenter + 100) {
                window.scrollTo({ top: cardTop - headerOffset, behavior: "instant" });
                break;
            }
        }
    }

    return (
        <div className={styles.container}>
            {canGoUp && (
                <button
                    className={styles.button}
                    onClick={scrollToPrev}
                    aria-label="Sebelumnya"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </button>
            )}
            {canGoDown && (
                <button
                    className={styles.button}
                    onClick={scrollToNext}
                    aria-label="Selanjutnya"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </button>
            )}
        </div>
    );
}

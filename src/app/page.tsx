"use client";

import { SARIMBIT_SERIES } from "@/config/products";
import Header from "@/components/Header";
import SeriesCard from "@/components/SeriesCard";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="seriesGrid">
          {SARIMBIT_SERIES.map((series) => (
            <SeriesCard key={series.name} series={series} />
          ))}
        </div>
        <p className="lastUpdated">
          Data diambil langsung dari iPos 5 &middot; Refresh halaman untuk
          memperbarui
        </p>
      </main>
      <BackToTop />
    </>
  );
}

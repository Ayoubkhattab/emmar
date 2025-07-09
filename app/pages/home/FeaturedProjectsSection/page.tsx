import React from "react";
import { MosqueCard } from "./MosqueCard";

export default function FeaturedSectionpage() {
  return (
    <div className="bg-[var(--background)] h-full py-6 ">
      <div className="px-12 py-2 text-3xl "> مشاريع مميزة</div>
      <MosqueCard />
    </div>
  );
}

// app/projects/featured/page.tsx أو أي مكان تريد

import { MosqueCard } from "@/components/MousqeCards/MosqueCard";
import { mosques } from "@/lib/data";

export default function FeaturedSectionpage() {
  return (
    <div className="bg-[var(--background)] h-full py-6">
      <div className="px-12 py-2 text-3xl">مشاريع مميزة</div>
      <MosqueCard mosques={mosques} />
    </div>
  );
}

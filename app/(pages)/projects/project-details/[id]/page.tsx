import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MosqueCard } from "@/components/MousqeCards/MosqueCard";
import { mosques as allMosques } from "@/lib/data";
import { FilterProjects } from "../../FIlterProjects";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const status = searchParams.get("status") || "";
  const governorate = searchParams.get("governorate") || "";
  const district = searchParams.get("district") || "";
  const sector = searchParams.get("sector") || "";

  const filteredMosques = allMosques.filter((m) => {
    return (
      m.name.includes(searchTerm) &&
      (status === "" || m.status === status) &&
      (governorate === "" || m.governorate === governorate) &&
      (district === "" || m.district === district) &&
      (sector === "" || m.sector === sector)
    );
  });

  return (
    <div
      className="bg-[var(--background)] h-full pt-20 py-6 px-6 space-y-6 mb-10"
      dir="rtl"
    >
      <h2 className="text-3xl">مشاريع إعمار المساجد</h2>

      <FilterProjects searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <MosqueCard mosques={filteredMosques} />
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MosqueCard } from "@/components/MousqeCards/MosqueCard";
import { mosques as allMosques } from "@/lib/data";
import { FilterProjects } from "@/app/(pages)/projects/FIlterProjects";

export function ProjectsContent() {
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
    <>
      <FilterProjects searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <MosqueCard mosques={filteredMosques} />
    </>
  );
}

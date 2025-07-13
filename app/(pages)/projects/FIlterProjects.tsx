"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const statuses = [
  { value: "", label: "كل الحالات" },
  { value: "under_study", label: "قيد الدراسة" },
  { value: "in_execution", label: "قيد التنفيذ" },
  { value: "completed", label: "مكتملة" },
];

const governorates = [
  { value: "", label: "كل المحافظات" },
  { value: "damascus", label: "دمشق" },
  { value: "aleppo", label: "حلب" },
  { value: "homs", label: "حمص" },
];

const districts = [
  { value: "", label: "كل النواحي" },
  { value: "district1", label: "الناحية 1" },
  { value: "district2", label: "الناحية 2" },
];

const sectors = [
  { value: "", label: "كل القطاعات" },
  { value: "sector1", label: "القطاع 1" },
  { value: "sector2", label: "القطاع 2" },
];

export function FilterProjects({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/projects?${params.toString()}`);
  };

  useEffect(() => {
    setStatus(searchParams.get("status") || "");
    setGovernorate(searchParams.get("governorate") || "");
    setDistrict(searchParams.get("district") || "");
    setSector(searchParams.get("sector") || "");
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <input
        type="text"
        placeholder="ابحث عن مسجد"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full md:w-1/2 p-1 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            updateQuery("status", e.target.value);
          }}
          className="p-2 border border-gray-300 rounded"
        >
          {statuses.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={governorate}
          onChange={(e) => {
            setGovernorate(e.target.value);
            updateQuery("governorate", e.target.value);
          }}
          className="p-2 border border-gray-300 rounded"
        >
          {governorates.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            updateQuery("district", e.target.value);
          }}
          className="p-2 border border-gray-300 rounded"
        >
          {districts.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={sector}
          onChange={(e) => {
            setSector(e.target.value);
            updateQuery("sector", e.target.value);
          }}
          className="p-2 border border-gray-300 rounded"
        >
          {sectors.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MosqueCard } from "@/components/MousqeCards/MosqueCard";
import { mosques as allMosques } from "@/lib/data";

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

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");

  // دالة لتحديث الرابط
  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/projects?${params.toString()}`);
  };

  // جلب الفلاتر من الرابط عند التحميل
  useEffect(() => {
    setStatus(searchParams.get("status") || "");
    setGovernorate(searchParams.get("governorate") || "");
    setDistrict(searchParams.get("district") || "");
    setSector(searchParams.get("sector") || "");
  }, []);

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
      <h2 className="text-3xl"> مشاريع إعمار المساجد</h2>

      {/* الفلاتر */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="ابحث عن مسجد"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-1 border border-gray-300 rounded"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          <select
            value={status}
            onChange={(e) => {
              const value = e.target.value;
              setStatus(value);
              updateQuery("status", value);
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
              const value = e.target.value;
              setGovernorate(value);
              updateQuery("governorate", value);
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
              const value = e.target.value;
              setDistrict(value);
              updateQuery("district", value);
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
              const value = e.target.value;
              setSector(value);
              updateQuery("sector", value);
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

      {/* عرض النتائج */}
      <MosqueCard mosques={filteredMosques} />
    </div>
  );
}

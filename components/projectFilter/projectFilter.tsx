"use client";

import { useState } from "react";
import { MosqueCard } from "../MousqeCards/MosqueCard";
import { mosques } from "@/lib/data";

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

export default function ProjectsFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");

  const filteredMosques = mosques.filter((mosque) => {
    return (
      mosque.name.includes(searchTerm) &&
      (status === "" || mosque.status === status) &&
      (governorate === "" || mosque.governorate === governorate) &&
      (district === "" || mosque.district === district) &&
      (sector === "" || mosque.sector === sector)
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6" dir="rtl">
      <input
        type="text"
        placeholder="ابحث عن مسجد"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          {statuses.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={governorate}
          onChange={(e) => setGovernorate(e.target.value)}
          className="p-2 border rounded"
        >
          {governorates.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="p-2 border rounded"
        >
          {districts.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="p-2 border rounded"
        >
          {sectors.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <MosqueCard mosques={filteredMosques} />
    </div>
  );
}

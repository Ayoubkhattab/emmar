import React from "react";

const stats = [
  { label: "إجمالي المساجد", value: "1" },
  { label: "المساجد المكتملة", value: "0" },
  { label: "التمويل المحصل", value: "$0" },
  { label: "سعة المصلين", value: "1,500" },
];

export default function GeneralInfo() {
  return (
    <section className=" bg-muted text-[var(--green-primary)] py-4 dark:text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="   py-2 text-center ">
              <div className="text-xl font-bold mb-2">{item.value}</div>
              <div className=" font-medium text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

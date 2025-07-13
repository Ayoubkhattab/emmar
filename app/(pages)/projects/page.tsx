// app/(pages)/projects/page.tsx
import { Suspense } from "react";
import { ProjectsContent } from "./projectContet";

export default function Page() {
  return (
    <div
      className="bg-[var(--background)] h-full pt-20 py-6 px-6 space-y-6 mb-10"
      dir="rtl"
    >
      <h2 className="text-3xl">مشاريع إعمار المساجد</h2>

      <Suspense fallback={<div>جاري التحميل...</div>}>
        <ProjectsContent />
      </Suspense>
    </div>
  );
}

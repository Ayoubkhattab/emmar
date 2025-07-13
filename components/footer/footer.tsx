"use client";

import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)]  py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("footer.title")}</h2>
          <p className="   leading-relaxed">{t("footer.description")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="/projects" className="hover:underline">
                استعراض المشاريع
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                مشاريع قيد الدراسة
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                مشاريع قيد التنفيذ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                مشاريع مكتملة
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                تواصل معنا
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                وزارة الأوقاف
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
          <address className="not-italic   space-y-2">
            <p>دمشق، سوريا</p>
            <p>
              <a
                href="mailto:eng-requests@awqaf.gov.sy"
                className="hover:underline"
              >
                eng-requests@awqaf.gov.sy
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 مبادرة إعمار المساجد السورية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

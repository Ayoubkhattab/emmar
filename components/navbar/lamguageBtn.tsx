"use client";
import i18n from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <button onClick={toggleLang}>
      <Globe className="w-5 h-5" />
    </button>
  );
}

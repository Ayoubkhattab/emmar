"use client";

import React, { useState } from "react";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./lamguageBtn";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation("common");

  const navItems = [
    t("navbar.home", "الرئيسية"),
    t("navbar.projects", "المشاريع"),
    t("navbar.partners", "الشركاء"),
    t("navbar.about", "عن المبادرة"),
    t("navbar.contact", "اتصل بنا"),
  ];
  const navLinks = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.projects", path: "/projects" },
    { key: "navbar.partners", path: "/partners" },
    { key: "navbar.about", path: "/about" },
    { key: "navbar.contact", path: "/contact" },
  ];

  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-colors fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-[var(--green-primary)] font-bold text-2xl cursor-default">
            {t("navbar.emmar")}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ key, path }, index) => (
              <a
                key={index}
                href={path}
                className="text-[var(--foreground)] hover:text-green-primary transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:flex-row-reverse">
            <LanguageSwitcher />

            <ModeToggle />

            <button className="hidden md:inline text-[var(--foreground)] hover:text-green-primary transition-colors shadow p-2 rounded-lg border border-amber-200">
              <a href="/login"> {t("navbar.login", "تسجيل الدخول")}</a>
            </button>
            <button className="hidden md:inline text-[var(--foreground)] hover:bg-[var(--gold-primary)]/70 bg-[var(--gold-primary)] px-4 py-2 rounded-md transition">
              <a href="/contact"> {t("navbar.bePartner", "كن شريكاً")}</a>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--foreground)] hover:text-green-primary focus:outline-none focus:ring-2 focus:ring-green-primary rounded"
              aria-label={
                mobileMenuOpen
                  ? t("navbar.closeMenu", "إغلاق القائمة")
                  : t("navbar.openMenu", "فتح القائمة")
              }
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[var(--background)] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map(({ key, path }, index) => (
            <a
              key={index}
              href={path}
              className="block px-3 py-2 rounded-md text-[var(--foreground)] hover:bg-green-primary hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(key)}
            </a>
          ))}

          <button className="w-full text-[var(--foreground)] hover:text-green-primary py-2 border-t border-gray-300 mt-2">
            <a href="/login"> {t("navbar.login", "تسجيل الدخول")}</a>
          </button>
          <button className="w-full bg-[var(--gold-primary)] hover:bg-[var(--gold-primary)]/70 text-[var(--foreground)] py-2 rounded mt-2">
            <a href="/contact"> {t("navbar.bePartner", "كن شريكاً")}</a>
          </button>
        </nav>
      )}
    </header>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import HeroBackground from "./background";
import { useTranslation } from "react-i18next";

export default function HeroContent() {
  const { t } = useTranslation();

  return (
    <div>
      <main className="relative">
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-[var(--foreground)]">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-4xl text-[var(--foreground)]">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                className="bg-[var(--green-primary)] hover:bg-[#04372f] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                type="button"
              >
                <a href="/projects">{t("hero.viewProjects")}</a>
              </Button>
              <button
                className="border-2 border-[var(--gold-primary)] text-[var(--foreground)] bg-[var(--background)]/65 px-8 py-2 text-lg rounded-lg transition-all duration-200"
                type="button"
              >
                {t("hero.bePartner")}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

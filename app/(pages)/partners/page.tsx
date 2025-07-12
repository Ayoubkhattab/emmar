import { partners } from "@/lib/partner";
import { PartnerCard } from "./partnerCards";

export default function Page() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-8 px-4 pt-24">
      <h1 className="text-3xl font-bold  mb-6">شركاؤنا</h1>
      <p className=" text-muted-foreground max-w-2xl text-lg  mb-10">
        نتعاون مع مجموعة من الشركاء المحليين والدوليين لدعم جهود إعادة إعمار
        المساجد التاريخية في سوريا.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}

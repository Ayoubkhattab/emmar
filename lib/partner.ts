export type PartnerType = "local" | "international";

export interface Partner {
  id: number;
  name: string;
  type: PartnerType;
  description: string;
  logo: string;
  website: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "شركة البناء الحديثة",
    type: "local",
    description: "شركة مساهمة في مشاريع إعادة الإعمار في دمشق وريفها.",
    logo: "/assets/background.jpg",
    website: "https://building-co.example.com",
  },
  {
    id: 1,
    name: "شركة البناء الحديثة",
    type: "local",
    description: "شركة مساهمة في مشاريع إعادة الإعمار في دمشق وريفها.",
    logo: "/assets/emaar.png",
    website: "https://building-co.example.com",
  },
  {
    id: 1,
    name: "شركة البناء الحديثة",
    type: "local",
    description: "شركة مساهمة في مشاريع إعادة الإعمار في دمشق وريفها.",
    logo: "/assets/emaar.png",
    website: "https://building-co.example.com",
  },
  {
    id: 2,
    name: "منظمة الإعمار الدولية",
    type: "international",
    description:
      "منظمة غير ربحية تدعم جهود إعادة إعمار المواقع التراثية في الشرق الأوسط.",
    logo: "/assets/emaar.png",
    website: "https://globalrebuild.org",
  },
];

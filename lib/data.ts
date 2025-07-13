export interface Mosque {
  id: number;
  name: string;
  city: string;
  description: string;
  image: string;
  currentFunding: number;
  totalFunding: number;
  status: "under_study" | "in_execution" | "completed";
  governorate: string;
  district: string;
  sector: string;
}

export const mosques: Mosque[] = [
  {
    id: 1,
    name: "مسجد خالد بن الوليد",
    city: "حمص",
    description: "هو مسجد أُسس في عهد الدولة العثمانية،...",
    image: "/assets/background.jpg",
    currentFunding: 23000,
    totalFunding: 50000,
    status: "under_study",
    governorate: "homs",
    district: "district1",
    sector: "sector1",
  },
  {
    id: 2,
    name: "مسجد الأموي",
    city: "دمشق",
    description: "من أقدم وأعظم المساجد في العالم الإسلامي...",
    image: "/assets/background.jpg",
    currentFunding: 10000,
    totalFunding: 100000,
    status: "completed",
    governorate: "damascus",
    district: "district2",
    sector: "sector2",
  },
  {
    id: 3,
    name: "مسجد السلطان",
    city: "حلب",
    description: "مسجد تاريخي معروف في حلب...",
    image: "/assets/background.jpg",
    currentFunding: 35000,
    totalFunding: 70000,
    status: "in_execution",
    governorate: "aleppo",
    district: "district1",
    sector: "sector1",
  },
];

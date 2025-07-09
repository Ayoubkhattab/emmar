import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MosqueCard() {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4">
      {mosques.map((mosque) => {
        const fundingPercent = Math.round(
          (mosque.currentFunding / mosque.totalFunding) * 100
        );
        if (mosque.id < 4)
          return (
            <div className="p-3" key={mosque.id}>
              <Card className="w-full max-w-sm relative pt-0 overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={mosque.image}
                    alt={mosque.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {mosque.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {mosque.city}، سوريا
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-sm">
                  <p>{mosque.description}</p>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>{fundingPercent}% تمويل</span>
                      <span>
                        ${mosque.currentFunding.toLocaleString()} / $
                        {mosque.totalFunding.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600"
                        style={{ width: `${fundingPercent}%` }}
                      />
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full  bg-[var(--gold-primary)] text-black text-lg ">
                    عرض التفاصيل
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
      })}
    </div>
  );
}

export const mosques = [
  {
    id: 1,
    name: "مسجد خالد بن الوليد",
    city: "حمص",
    description:
      "هو مسجد أُسس في عهد الدولة العثمانية، ويعد من أبرز المعالم الدينية في مدينة حمص.",
    image: "/assets/background.jpg",
    currentFunding: 0,
    totalFunding: 50000,
  },
  {
    id: 2,
    name: "مسجد الأموي",
    city: "دمشق",
    description:
      "من أقدم وأعظم المساجد في العالم الإسلامي ويعد رمزاً تاريخياً في دمشق.",
    image: "/assets/umayyad.jpg",
    currentFunding: 10000,
    totalFunding: 100000,
  },
  {
    id: 3,
    name: "مسجد السلطان",
    city: "حلب",
    description:
      "مسجد تاريخي معروف في حلب ويحتاج إلى الترميم بعد الأضرار الأخيرة.",
    image: "/assets/sultan.jpg",
    currentFunding: 35000,
    totalFunding: 70000,
  },
  {
    id: 4,
    name: "مسجد خالد بن الوليد",
    city: "حمص",
    description:
      "هو مسجد أُسس في عهد الدولة العثمانية، ويعد من أبرز المعالم الدينية في مدينة حمص.",
    image: "/assets/background.jpg",
    currentFunding: 0,
    totalFunding: 50000,
  },
  {
    id: 5,
    name: "مسجد خالد بن الوليد",
    city: "حمص",
    description:
      "هو مسجد أُسس في عهد الدولة العثمانية، ويعد من أبرز المعالم الدينية في مدينة حمص.",
    image: "/assets/background.jpg",
    currentFunding: 0,
    totalFunding: 50000,
  },
  {
    id: 6,
    name: "مسجد خالد بن الوليد",
    city: "حمص",
    description:
      "هو مسجد أُسس في عهد الدولة العثمانية، ويعد من أبرز المعالم الدينية في مدينة حمص.",
    image: "/assets/background.jpg",
    currentFunding: 0,
    totalFunding: 50000,
  },
];

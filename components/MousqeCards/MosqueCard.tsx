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
import { Mosque } from "@/lib/data";

export function MosqueCard({ mosques }: { mosques: Mosque[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4">
      {mosques.map((mosque) => {
        const fundingPercent = Math.round(
          (mosque.currentFunding / mosque.totalFunding) * 100
        );

        return (
          <div
            className="w-full sm:w-[300px] md:w-[340px] lg:w-[360px]"
            key={mosque.id}
          >
            <Card className="relative overflow-hidden h-full flex flex-col">
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

              <CardFooter className="mt-auto">
                <Button className="w-full bg-[var(--gold-primary)] text-black text-lg">
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

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Partner } from "@/lib/partner";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card className="w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-md p-4  ">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
        <CardHeader className="relative w-full h-48 md:w-1/3 md:h-40 flex-shrink-0">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 33vw"
          />
        </CardHeader>

        <div className="mt-6 md:mt-0 flex flex-col flex-grow text-right ">
          <CardTitle className="text-2xl font-bold mb-2">
            {partner.name}
          </CardTitle>
          <p
            className={`text-sm font-medium mb-4 ${
              partner.type === "local" ? "text-green-600" : "text-blue-600"
            }`}
          >
            {partner.type === "local" ? "شريك محلي" : "شريك دولي"}
          </p>
          <CardContent className="text-gray-700 text-sm mb-6 max-h-32 overflow-y-auto">
            <p>{partner.description}</p>
          </CardContent>
          <CardFooter className="w-full p-0">
            <Button className="w-full bg-[var(--gold-primary)] text-black font-semibold hover:brightness-110 transition rounded-md py-2">
              زيارة الموقع
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

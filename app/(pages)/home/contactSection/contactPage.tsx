import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactPage() {
  return (
    <div className=" p-20 flex flex-col items-center bg-[var(--green-primary)] text-white">
      <p className="text-3xl mb-2">كن شريكاً في إحياء تراث سوريا</p>
      <p className="text-xl my-2">
        ساهم في إعادة إعمار المساجد التاريخية وإحياء التراث الثقافي السوري
      </p>

      <Button
        variant={"secondary"}
        className="text-black px-8 py-6 mt-4 text-lg  rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        type="button"
      >
        تواصل معنا
      </Button>
    </div>
  );
}

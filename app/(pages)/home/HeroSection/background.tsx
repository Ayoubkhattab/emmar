import Image from "next/image";
import React from "react";

export default function HeroBackground() {
  return (
    <div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background.jpg"
          alt="Syrian Heritage Background"
          fill
          className="object-cover h-full opacity-15"
          priority
        />
      </div>
    </div>
  );
}

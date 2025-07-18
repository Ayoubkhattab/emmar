"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/login")) {
    return null;
  }

  return <Footer />;
}

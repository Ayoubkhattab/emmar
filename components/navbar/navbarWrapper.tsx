"use client";
import { usePathname } from "next/navigation";
import Navbar from "./header";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/login")) {
    return null;
  }

  return <Navbar />;
}

// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/navbar/navbarWrapper";
import { ThemeProvider } from "next-themes";
import FooterWrapper from "@/components/footer/footerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "إحياء تراث سوريا - إعمار",
  description:
    "مبادرة لتوثيق إنجازات ترميم المساجد السورية وعرض المشاريع المحتاجة للتمويل",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head></head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <NavbarWrapper />
          {children}
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { translations } from "@/data/translations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: translations.siteTitle,
  description: translations.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

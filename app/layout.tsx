import type { Metadata } from "next";
import { Inter, Azeret_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const azeret = Azeret_Mono({
  weight: ["100", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Chung",
  description: "CS. Design. Fortnite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

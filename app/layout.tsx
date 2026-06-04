import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "AliPnr",
  description: "Jasa Pembuatan & Perbaikan Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
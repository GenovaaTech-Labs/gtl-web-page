import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenovaaTech Labs | Embedded Systems • IoT • Edge AI",
  description:
    "GenovaaTech Labs – Embedded Systems Development, IoT Solutions, Edge AI Products, and Engineering Training Programs.",
  keywords: [
    "Embedded Systems",
    "IoT",
    "Edge AI",
    "FPGA",
    "Embedded Consultancy",
    "GenovaaTech Labs",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#0B1120] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

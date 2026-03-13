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
    "GenovaaTech Labs"
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
    <html lang="en">
        <body className="bg-[#0B1120] text-white relative overflow-x-hidden">

          {/* Global Animated Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">

            {/* Moving PCB Grid */}
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,#00BFFF22_1px,transparent_1px),linear-gradient(#00BFFF22_1px,transparent_1px)] bg-[size:60px_60px]"
              style={{ animation: "moveGrid 40s linear infinite" }}
            ></div>

            {/* Large Glow */}
            <div className="absolute w-[800px] h-[800px] bg-[#00BFFF]/10 blur-[200px] rounded-full top-[-200px] left-[-200px]"></div>

            {/* Floating Particles */}
              <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-[#00BFFF] rounded-full opacity-40"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
                      }}
                    ></div>
            ))}
          </div>
          </div>

          {children}
        </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Ensure the path to your component is correct
import SmoothScroll from "./components/SmoothScroll"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "KARTIKEY", // Updated from your placeholder
  description: "Portfolio of Kartikey - .NET, Flutter, and AI Integration specialist.",
  icons: {
    icon: "/portfolio/icon.png",
    shortcut: "/portfolio/icon.png",
    apple: "/portfolio/icon.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased `}
    >
      {/* 1. Added bg-white to prevent flashes during smooth scroll */}
      {/* 2. Added selection:bg-pink-300 to match the Squareme theme globally */}
      <body className="h-full bg-white text-black selection:bg-pink-300">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

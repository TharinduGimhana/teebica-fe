"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Teebica",
//   description: "Experience the taste",
// };

const suppressWarnings = () => {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    const errorMessage = args[0];
    if (
      typeof errorMessage === "string" &&
      (errorMessage.includes("Accessing element.ref was removed in React 19") ||
        errorMessage.includes("render.js:38 Uncaught TypeError: reactRender is not a function") || errorMessage.includes("A tree hydrated but some attributes of"))
    ) {
      return;
    }
    originalConsoleError(...args);
  };
};

suppressWarnings();

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    const handleScroll = () => {
      if (scrollContainer.scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} full-background`}
        id="scroll-container"
      >
        <Navbar isScrolled={isScrolled} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Qurio - A Search Bar for Your Money",
  description: "The simplest way to understand your finances. One number. Infinite questions. Download Qurio for iOS.",
  keywords: ["personal finance", "money management", "net worth tracker", "AI finance", "budgeting app"],
  openGraph: {
    title: "Qurio - A Search Bar for Your Money",
    description: "The simplest way to understand your finances.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurio - A Search Bar for Your Money",
    description: "The simplest way to understand your finances.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

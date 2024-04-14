import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Z-Blog",
    template: "%s | Z-Blog",
  },
  description: "A blog site about programming, web development and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const widthStyling = "w-[475px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]";
  return (
    <html lang="en">
      <body className={`${inter.className} ${widthStyling} min-h-screen m-auto px-2 flex justify-between flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

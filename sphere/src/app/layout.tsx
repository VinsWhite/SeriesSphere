import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Series Sphere",
  description: "The best site for TV Series news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-primary pb-4`}>
        <Providers>
          <Header />
          <div className="container px-10 pt-7">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

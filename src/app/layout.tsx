import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noam Podoler",
  description: "Full-Stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-hidden"}>
        <div className="flex h-screen w-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}

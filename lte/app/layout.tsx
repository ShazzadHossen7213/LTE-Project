import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/sections/top-bar";
import TeaHeader from "@/components/sections/tea-header";

export const metadata: Metadata = {
  title: "London Tea Exchange — Premium Loose-Leaf Tea",
  description: "Purveyor of direct trade, organic teas from off the beaten path. Handpicked single-origin teas from remote mountain gardens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        <TopBar />
        <TeaHeader />
        {children}
      </body>
    </html>
  );
}

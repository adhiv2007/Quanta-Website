import type { Metadata } from "next";

import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quanta Research - Apply",
};

export default async function Home() {
  return <>Hello</>;
}

export const revalidate = 180;

import { LinkButton } from "@/components/ui/Button";
import HeroSection from "@/features/website/components/Landing/HeroSection";
import LineContainer from "@/components/LineContainer";
import NewsLetterSection from "@/features/website/components/Landing/NewsLetterSection";
import StatItem from "@/features/website/components/Stats/StatItem";
import StatsSection from "@/features/website/components/Stats/StatsSection";
import type { Metadata } from "next";
import LineSection from "@/components/LineSection";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import InfoSections from "@/features/website/components/Landing/InfoSections";

export const metadata: Metadata = {
  title: "Quanta Research - Home",
};

export default async function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection>
        <StatItem label="Success Stories" value="8k+" />
        <StatItem label="Expert Instructors" value="200+" />
        <StatItem label="Worldwide Students" value="108k+" />
        <StatItem label="Trendy Subjects" value="310+" />
      </StatsSection>

      <InfoSections />
      <NewsLetterSection />
      {/* Stats Section */}
    </main>
  );
}

/*
<div className="text-center">
            <h3 className="text-4xl font-bold">8K+</h3>
            <p className="mt-2">Success Stories</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="mt-2">Expert Instructors</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">108K+</h3>
            <p className="mt-2">Worldwide Students</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">310+</h3>
            <p className="mt-2">Trendy Subjects</p>
          </div>
*/

export const revalidate = 180;

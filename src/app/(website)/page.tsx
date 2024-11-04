import HeroSection from "@/features/website/components/Landing/HeroSection";
import NewsLetterSection from "@/features/website/components/Landing/NewsLetterSection";
import StatItem from "@/features/website/components/Stats/StatItem";
import StatsSection from "@/features/website/components/Stats/StatsSection";
import type { Metadata } from "next";
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

export const revalidate = 180;

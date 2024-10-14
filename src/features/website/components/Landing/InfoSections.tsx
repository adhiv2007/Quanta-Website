"use client";

import LineContainer from "@/components/LineContainer";
import LineSection from "@/components/LineSection";
import { Lightbulb, Users, GraduationCap } from "lucide-react";
import Image from "next/image";

const InfoSections = () => {
  return (
    <LineContainer>
      <LineSection
        subtitle="Our Vision"
        title="Empowering Research Innovation"
        Icon={Lightbulb}
        image={
          <Image src="/landing1.jpg" alt="test" width={1024} height={1024} />
        }
      >
        At Quanta Research Group, our mission is to break down barriers and
        democratize access to high-quality research opportunities. We foster
        innovation by connecting researchers, mentors, and institutions to solve
        real-world problems across diverse fields.
      </LineSection>
      <LineSection
        subtitle="Our Approach"
        title="Supporting Researchers at Every Level"
        Icon={GraduationCap}
        reverse
        image={
          <Image src="/landing1.jpg" alt="test" width={1024} height={1024} />
        }
      >
        From beginners to advanced researchers, we provide structured programs,
        mentorship, and resources to help individuals excel in their research
        endeavors. Whether it's foundational training or advanced methodologies,
        Quanta supports researchers at every stage.
      </LineSection>
      <LineSection
        subtitle="Our Community"
        title="A Global Network of Innovators"
        Icon={Users}
        image={
          <Image src="/landing1.jpg" alt="test" width={1024} height={1024} />
        }
      >
        Join a vibrant, global community where collaboration and
        knowledge-sharing thrive. Quanta connects researchers across
        disciplines, offering opportunities for networking, mentorship, and
        collaborative projects that push the boundaries of knowledge.
      </LineSection>
    </LineContainer>
  );
};

export default InfoSections;

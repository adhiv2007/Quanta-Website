import { LinkButton } from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center min-h-screen py-24 relative">
      <div className="container grid grid-rows-2 items-center gap-8 lg:grid-rows-none lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-purple-300 text-sm uppercase">
              unlocking the power of research
            </h3>
            <h2 className="text-5xl font-bold text-primary">
              Unlocking the Power of Research
            </h2>
            <p className="mt-4 text-primary/80">
              Whether you're an aspiring researcher or a seasoned professional,
              our community is here to support your journey. Through our
              structured research programs and open support initiatives, we aim
              to cultivate innovation, foster collaboration, and bridge the gap
              between theoretical knowledge and practical solutions.
            </p>
          </div>
          <div>
            <LinkButton
              className="text-md px-6 py-3 rounded-md mr-4"
              href="/apply"
            >
              Apply Now
            </LinkButton>
            <LinkButton
              variant="outline"
              className="text-md border-2 bg-primary-foreground border-primary text-primary px-6 py-3 rounded-md"
              href="/program"
            >
              Our Program
            </LinkButton>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-full">
          <Image
            src="/landing1.jpg"
            alt="Student with Book"
            className="w-full h-full object-contain rounded-lg transition-transform duration-500"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

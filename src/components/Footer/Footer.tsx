import React from "react";
import Brand from "../Brand";
import FooterLinksList from "./FooterLinksList";
import { Separator } from "../ui/Separator";
import { getA7medLinkedin } from "@/lib/utils";
import Link from "@/components/ui/Link";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-black/95 w-full text-primary">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-8 md:flex-row justify-between py-8">
          <div className="max-w-lg flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-5">
              <Brand />
              <p className="text-primary/80 text-md">
                Empowering global researchers with resources, programs, and
                community to drive meaningful change through research.
              </p>
            </div>
            {/* <div className="w-full flex items-center mt-2 md:mt-5">
              <FooterSocialMediaLinks />
            </div> */}
          </div>

          <div className="w-full flex flex-col gap-8">
            <div className="justify-end flex flex-col md:flex-row gap-3 md:gap-12 lg:gap-24">
              <FooterLinksList
                title="Social Media"
                links={[
                  {
                    title: "Facebook",
                    href: process.env.NEXT_PUBLIC_FACEBOOK_URL as string,
                  },
                  {
                    title: "Twitter",
                    href: process.env.NEXT_PUBLIC_TWITTER_URL as string,
                  },
                  {
                    title: "LinkedIn",
                    href: process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
                  },
                  {
                    title: "Instagram",
                    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL as string,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="text-xs flex flex-col gap-4 py-4">
          <Separator className="bg-primary/30" />
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between text-primary/80">
            <p>© 2024 Quanta Research Orgnization. All rights reserved</p>
            <p>
              Developed by <Link href={getA7medLinkedin()}>Ahmed</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

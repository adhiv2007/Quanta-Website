"use client";

import Brand from "../Brand";
import { NavbarMenu } from "./NavbarMenu";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";
import { NavActions } from "./NavActions";

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <nav
      className={cn(
        "z-20 max-w-full fixed w-screen transition-colors h-30 duration-300",
        isScrolled ? "bg-background text-primary" : ""
      )}
    >
      <div className="py-2 lg:py-3 px-6 md:px-16 flex justify-between items-center w-full h-full gap-16">
        <Brand />
        <NavbarMenu isScrolled={isScrolled} />
        <NavActions />
      </div>
    </nav>
  );
};

export default Navbar;

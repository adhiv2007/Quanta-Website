import Link from "@/components/ui/Link";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  withText?: boolean;
}

const Brand: FC<Props> = ({ withText = true }) => {
  return (
    <Link className="flex gap-4 justify-center items-center uppercase" href="/">
      <Image
        width={1024}
        height={1024}
        src="/brand.png"
        alt="Quanta Research Orgnization"
        className="w-16 h-16"
      />
      {withText && (
        <div className="text-xl font-bold">
          <p>Quanta</p>
          <p>Research</p>
        </div>
      )}
    </Link>
  );
};

export default Brand;

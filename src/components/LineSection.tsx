"use client";

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  title?: string;
  image: ReactNode;
  Icon: LucideIcon;
  reverse?: boolean;
}

interface ImageContainerProps {
  image: ReactNode;
}

const LineSectionImageContainer: FC<ImageContainerProps> = ({ image }) => {
  return (
    <div className="relative w-full lg:w-1/2 text-center flex justify-center overflow-hidden rounded-lg">
      {image}
    </div>
  );
};

const LineSection: FC<Props> = ({
  subtitle,
  title,
  Icon,
  image,
  reverse,

  children,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      {...props}
      className={cn(`flex flex-row gap-8 lg:space-x-8`, props.className)}
    >
      <div className="z-10 flex items-center justify-center w-10 h-10 p-3 rounded-full bg-purple-800">
        <Icon size={48} className="text-white" />
      </div>

      <div className="flex flex-col gap-8 md:flex-row lg:space-x-8">
        {reverse && <LineSectionImageContainer image={image} />}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="space-y-2">
            {subtitle && (
              <h3 className="text-sm font-bold uppercase text-purple-300 tracking-wider">
                {subtitle}
              </h3>
            )}
            {title && <h2 className="text-4xl font-bold">{title}</h2>}
          </div>
          <div>{children}</div>
        </motion.div>
        {!reverse && <LineSectionImageContainer image={image} />}
      </div>
    </section>
  );
};

export default LineSection;

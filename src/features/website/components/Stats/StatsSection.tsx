import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const StatsSection: FC<Props> = ({ ...props }) => {
  return (
    <section {...props} className={cn("bg-purple-800 py-16", props.className)}>
      <div className="container mx-auto grid gap-4 grid-rows-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {props.children}
      </div>
    </section>
  );
};

export default StatsSection;

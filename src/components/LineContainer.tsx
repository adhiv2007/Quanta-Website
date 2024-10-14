import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const LineContainer: FC<Props> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn("relative px-4 xl:container w-full", props.className)}
    >
      <div className="w-1 -z-10 absolute left-[2.15rem] xl:left-[3.15rem]  h-full bg-purple-800" />
      <div className="w-full h-full py-24 space-y-36">{props.children}</div>
    </div>
  );
};

export default LineContainer;

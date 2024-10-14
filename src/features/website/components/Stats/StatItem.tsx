import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  label: string;
  value: string;
}

const StatItem: FC<Props> = ({ label, value, ...props }) => {
  return (
    <div {...props} className={cn("text-center", props.className)}>
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="mt-2">{label}</p>
    </div>
  );
};

export default StatItem;

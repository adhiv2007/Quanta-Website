import Image from "next/image";
import { FC, SVGAttributes } from "react";
import NotFound from "../../../public/404.svg";

type Props = SVGAttributes<any>;

export const PageNotFoundIllustration: FC<Props> = ({ ...props }) => {
  return <Image priority src={NotFound} alt="Page not found" />;
};

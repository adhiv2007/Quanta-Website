import React, { FC } from "react";
import { PageNotFoundIllustration } from "./Illustrations/PageNotFound";
import { LinkButton } from "./ui/Button";

interface Props {
  title?: string;
}

const PageNotFound: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4 flex-1 text-center">
      <PageNotFoundIllustration height={250} />
      <LinkButton href="/">Return to Home Page</LinkButton>
    </div>
  );
};

export default PageNotFound;

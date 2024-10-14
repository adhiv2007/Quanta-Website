import { FC, HTMLAttributes } from "react";
import NewsLetterForm from "./newsletter/NewsLetterForm";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const NewsLetterSection: FC<Props> = () => {
  return (
    <section id="admission" className="w-full bg-purple-800">
      <div className="container w-full h-full space-y-8 py-32 flex items-center flex-col">
        <div className="space-y-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Get Newsletter delivered straight to your inbox.
          </h2>
        </div>
        <NewsLetterForm />
      </div>
    </section>
  );
};

export default NewsLetterSection;

import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection = ({ title, subheading, pill }: TitleSectionProps) => {
  return (
    <section className="flex flex-col gap-5 justify-center items-start md:items-center">
      <div className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-brand-primary-blue dark:to-primary-purple-900">
        <div className="dark:bg-black px-3 py-1 rounded-full">{pill}</div>
      </div>
      {subheading ? (
        <>
          <h2 className="text-4xl md:text-center sm:max-w-[750px] font-semibold">
            {title}
          </h2>
          <p className="sm:max-w-[450px] dark:text-washed-purple-700 md:text-center">
            {subheading}
          </p>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl font-semibold md:text-center sm:max-w-[850px] text-left">
          {title}
        </h1>
      )}
    </section>
  );
};

export default TitleSection;

import HeroSection from "@/components/HeroSection";
import { componentRegistry } from "@/components/component-registry";
import { getPageData } from "@/utils/pageApi";
import React from "react";
import { notFound } from "next/navigation";
export const revalidate = 60; // 🔑 Revalidate after 60s
const DynamicPage = async ({ params }) => {
  const slugArray = params?.slug || [];
  const slugPath = slugArray.join("/");
  const finalSlug = slugPath === "" ? "home" : `${slugPath}`;
  const data = await getPageData(finalSlug);
  console.log(data, "errrrr");

  if (data?.data?.pageBy === null) {
    notFound();
  }

  const pageBlocks = data?.data?.pageBy?.pageBuilder?.pageBuilder || [];

  console.log(pageBlocks, "fffffffffff");

  return (
    <div className="">
      {/* <HeroSection /> */}
      {pageBlocks.map((block, i) => {
        const key = Object.keys(block)[0];
        const Component = componentRegistry[key];

        if (!Component) {
          console.warn(`No component found for ${key}`);
          return null;
        }

        return <Component key={i} {...block[key]} />;
      })}
      {/* <InnovationSection/>
        <NextGenTechnology/>
        <StickyTitleWithPoints/>
         <InnovationSection/>
        <NextGenTechnology/> */}
    </div>
  );
};

export default DynamicPage;

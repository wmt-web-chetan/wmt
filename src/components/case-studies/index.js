"use client";

import CaseStudyCard from "@/blocks/CaseStudyCard";
import { useRouter } from "next/navigation";

const allCaseStudies = [
  {
    id: 1,
    title: "Viva Wireless",
    description:
      "Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Membership Integration, and Real-Time Inventory Sync.",
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/0d6a55646e9aa800ca19a86402554b868c16be30.png",
    tags: [
      "Bulk Return",
      "Bulk Discount",
      "Maintenance",
      "My Wallet",
      "Pay Later",
      "POS",
      "Wholesale & Retail",
    ],
    category: "E-commerce",
  },
  {
    id: 2,
    title: "StreamBase",
    description:
      "Revolutionizing AV Distribution with Seamless, Scalable, and Ultra-Low Latency Video and Audio Over IP.",
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/Next-Gen-Av-over-IP-Distribution-Platform-Stream-Base.png",
    tags: [
      "AI Core IP",
      "IP Based Routing",
      "Video Wall Support",
      "Full Control/Power over Ethernet",
    ],
    category: "Media Technology",
  },
  {
    id: 3,
    title: "Melly",
    description: "Mental Wellness App Powered by AI Insights.",
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: [
      "Categorized Content",
      "CBT Exercise",
      "Melly Coach AI",
      "Today's Plan",
      "Personalized Program",
    ],
    category: "Healthcare",
  },
];

export default function CaseStudiesSection() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push("/case-study");
  };

  const renderCaseStudies = () => {
    const elements = [];
    let i = 0;

    while (i < allCaseStudies.length) {
      const isFullWidth = i % 3 === 0;

      if (isFullWidth) {
        const caseStudy = allCaseStudies[i];
        elements.push(
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            isFullWidth={true}
          />
        );
        i++;
      } else {
        const firstCaseStudy = allCaseStudies[i];
        const secondCaseStudy = allCaseStudies[i + 1];

        if (firstCaseStudy && secondCaseStudy) {
          elements.push(
            <div
              key={"pair-" + i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <CaseStudyCard caseStudy={firstCaseStudy} isFullWidth={false} />
              <div className="rounded-4xl" style={{ backgroundColor: "#f0f4ff" }}>
                <CaseStudyCard caseStudy={secondCaseStudy} isFullWidth={false} />
              </div>
            </div>
          );
          i += 2;
        } else if (firstCaseStudy) {
          elements.push(
            <div key={firstCaseStudy.id} className="lg:w-1/2">
              <CaseStudyCard caseStudy={firstCaseStudy} isFullWidth={false} />
            </div>
          );
          i++;
        } else {
          break;
        }
      }
    }

    return elements;
  };

  return (
    <div className="bg-white">
      <section className="w-full p-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Case <span className="text-gradient-primary">Studies</span>
          </h2>
          <p className="text-lg text-gray-600 w-full mx-auto text-pretty">
            Explore how our tailored solutions transformed complex problems into
            success stories.
          </p>
        </div>

        <div className="space-y-8 mb-12">{renderCaseStudies()}</div>

        <div className="text-center">
          <button
            onClick={handleViewAll}
            className="bg-gradient-primary hover:cursor-pointer text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View All
          </button>
        </div>
      </section>
    </div>
  );
}
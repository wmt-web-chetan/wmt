"use client";

import { useState } from "react";
import Image from "next/image";

const allCaseStudies = [
  {
    id: 1,
    title: "Viva Wireless",
    description:
      "Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Membership Integration, and Real-Time Inventory Sync.",
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/0d6a55646e9aa800ca19a86402554b868c16be30.png", // E-commerce / POS
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
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/Next-Gen-Av-over-IP-Distribution-Platform-Stream-Base.png", // Streaming / Media
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
    image: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp", // Mental health / Wellness
    tags: [
      "Categorized Content",
      "CBT Exercise",
      "Melly Coach AI",
      "Today's Plan",
      "Personalized Program",
    ],
    category: "Healthcare",
  },
  {
    id: 4,
    title: "TechFlow Solutions",
    description:
      "Enterprise workflow automation platform that streamlines business processes with AI-powered insights and real-time analytics.",
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg", // Business workflow dashboard
    tags: [
      "Workflow Automation",
      "AI Analytics",
      "Real-time Monitoring",
      "Enterprise Integration",
    ],
    category: "Enterprise Software",
  },
  {
    id: 5,
    title: "EcoTrack",
    description:
      "Sustainability tracking platform helping businesses monitor and reduce their carbon footprint through smart data collection.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg", // Nature / Eco analytics
    tags: [
      "Carbon Tracking",
      "Sustainability Reports",
      "Environmental Analytics",
      "Green Metrics",
    ],
    category: "Sustainability",
  },
  {
    id: 6,
    title: "FinanceHub Pro",
    description:
      "Comprehensive financial management system for SMEs with automated bookkeeping, invoicing, and tax compliance features.",
    image: "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg", // Finance dashboard
    tags: [
      "Automated Bookkeeping",
      "Invoice Management",
      "Tax Compliance",
      "Financial Reports",
    ],
    category: "Fintech",
  },
  {
    id: 7,
    title: "LearnSpace",
    description:
      "Interactive online learning platform with personalized curriculum, progress tracking, and collaborative study tools.",
    image: "https://images.pexels.com/photos/4144226/pexels-photo-4144226.jpeg", // E-learning / Laptop study
    tags: [
      "Personalized Learning",
      "Progress Tracking",
      "Interactive Content",
      "Collaboration Tools",
    ],
    category: "Education",
  },
  {
    id: 8,
    title: "HealthConnect",
    description:
      "Telemedicine platform connecting patients with healthcare providers through secure video consultations and health monitoring.",
    image: "https://images.pexels.com/photos/4226265/pexels-photo-4226265.jpeg", // Telemedicine / Doctor online
    tags: [
      "Video Consultations",
      "Health Monitoring",
      "Secure Messaging",
      "Appointment Scheduling",
    ],
    category: "Healthcare",
  },
  {
    id: 9,
    title: "RetailMax",
    description:
      "Omnichannel retail management system integrating online and offline sales with inventory optimization and customer insights.",
    image: "https://images.pexels.com/photos/5632390/pexels-photo-5632390.jpeg", // Retail shop / POS
    tags: [
      "Omnichannel Sales",
      "Inventory Management",
      "Customer Analytics",
      "POS Integration",
    ],
    category: "Retail",
  },
  {
    id: 10,
    title: "CloudSecure",
    description:
      "Advanced cybersecurity platform providing real-time threat detection, automated response, and compliance monitoring.",
    image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg", // Cybersecurity / Tech
    tags: [
      "Threat Detection",
      "Automated Response",
      "Compliance Monitoring",
      "Security Analytics",
    ],
    category: "Cybersecurity",
  },
  {
    id: 11,
    title: "AgriTech Solutions",
    description:
      "Smart farming platform using IoT sensors and AI to optimize crop yields, monitor soil health, and manage irrigation systems.",
    image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg", // Farming / Agriculture tech
    tags: [
      "IoT Sensors",
      "Crop Optimization",
      "Soil Monitoring",
      "Smart Irrigation",
    ],
    category: "Agriculture",
  },
  {
    id: 12,
    title: "LogiTrack",
    description:
      "Supply chain management platform with real-time tracking, route optimization, and predictive analytics for logistics companies.",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg", // Logistics / Tracking
    tags: [
      "Real-time Tracking",
      "Route Optimization",
      "Predictive Analytics",
      "Fleet Management",
    ],
    category: "Logistics",
  },
];

function CaseStudyCard({ caseStudy, isFullWidth = false }) {
  if (isFullWidth) {
    return (
      <div className="group overflow-hidden border-0 transition-all duration-300 rounded-4xl" style={{backgroundColor: "#f0f4ff"}}>
        <div className="p-0">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-gradient-primary transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-md text-gray-600 mb-6 leading-relaxed text-pretty">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm px-4 py-2 text-black hover:bg-white transition-colors rounded-full inline-block"
                      style={{backgroundColor: "#B4B4B433"}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button className="w-fit bg-transparent hover:bg-transparent border-1 border-primary text-primary transition-all duration-200 px-4 py-2 rounded-full flex items-center gap-2">
                  <span>View Case Study</span>
                  <i className="icon-right-open"></i>
                </button>
              </div>
            </div>

            <div className="lg:w-3/5 m-4 relative min-h-[500px] lg:min-h-[600px]">
              <div className="absolute inset-4 rounded-4xl overflow-hidden" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"}}>
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title + " case study preview"}
                  fill
                  className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden border-0 transition-all duration-300 rounded-4xl" style={{backgroundColor: "#f0f4ff"}}>
      <div className="p-6">
        <div className="relative mb-6 h-124 rounded-4xl overflow-hidden" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"}}>
          <Image
            src={caseStudy.image || "/placeholder.svg"}
            alt={caseStudy.title + " case study preview"}
            fill
            className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient-primary transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 mb-4 text-base leading-relaxed text-pretty">
          {caseStudy.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-sm px-4 py-2 text-black rounded-full inline-block"
                style={{backgroundColor: "#B4B4B433"}}
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="bg-transparent hover:bg-transparent border-1 border-primary text-primary px-3 py-1.5 text-sm rounded-full transition-all duration-200 flex items-center gap-2">
            <span>View Case Study</span>
            <i className="icon-right-open"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewAll = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prev) => Math.min(prev + 3, allCaseStudies.length));
    setIsLoading(false);
  };

  const visibleCaseStudies = allCaseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < allCaseStudies.length;

  const renderCaseStudies = () => {
    const elements = [];
    let i = 0;

    while (i < visibleCaseStudies.length) {
      const isFullWidth = i % 3 === 0;

      if (isFullWidth) {
        const caseStudy = visibleCaseStudies[i];
        elements.push(
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            isFullWidth={true}
          />
        );
        i++;
      } else {
        const firstCaseStudy = visibleCaseStudies[i];
        const secondCaseStudy = visibleCaseStudies[i + 1];

        if (firstCaseStudy && secondCaseStudy) {
          elements.push(
            <div
              key={"pair-" + i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <CaseStudyCard caseStudy={firstCaseStudy} />
              <div className="rounded-4xl" style={{backgroundColor: "#f0f4ff"}}>
                <CaseStudyCard caseStudy={secondCaseStudy} />
              </div>
            </div>
          );
          i += 2;
        } else if (firstCaseStudy) {
          elements.push(
            <div key={firstCaseStudy.id} className="lg:w-1/2">
              <CaseStudyCard caseStudy={firstCaseStudy} />
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

        {hasMore && (
          <div className="text-center">
            <button
              onClick={handleViewAll}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Loading...
                </div>
              ) : (
                "View All"
              )}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import aiImage from "../../assets/images/404SVG/futuristic-ai-chip-circuit-board 1.png";

const StickyTitleWithPoints = () => {
  const services = [
    {
      title: "Generative AI & Foundation Models",
      description:
        "We build large-scale generative models for chatbots, content generation, and language reasoning. We also integrate GPT, LLaMA, and Claude into your CRM and service platforms.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We've delivered NLP solutions for legal document parsing (93%+ accuracy), email triage, conversational routing, sentiment scoring, and regulatory compliance scanning.",
    },
    {
      title: "Computer Vision (CV)",
      description:
        "Some of our projects in AI computer vision include defect detection on manufacturing lines, medical image segmentation, smart surveillance, and OCR for document digitization.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Develop AI software systems that generate predictions from time-series data. A forecasting model we built for a retail client reduced stockouts by 37% and improved sales prediction.",
    },
    {
      title: "Machine Learning Operations",
      description:
        "End-to-end MLOps solutions including model deployment, monitoring, and automated retraining pipelines. We ensure your AI models maintain peak performance in production.",
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations for specific business needs, from recommendation engines to automated decision systems. We work closely with your team to deliver solutions that drive results.",
    },
     {
      title: "Generative AI & Foundation Models",
      description:
        "We build large-scale generative models for chatbots, content generation, and language reasoning. We also integrate GPT, LLaMA, and Claude into your CRM and service platforms.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We've delivered NLP solutions for legal document parsing (93%+ accuracy), email triage, conversational routing, sentiment scoring, and regulatory compliance scanning.",
    },
    {
      title: "Computer Vision (CV)",
      description:
        "Some of our projects in AI computer vision include defect detection on manufacturing lines, medical image segmentation, smart surveillance, and OCR for document digitization.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Develop AI software systems that generate predictions from time-series data. A forecasting model we built for a retail client reduced stockouts by 37% and improved sales prediction.",
    },
    {
      title: "Machine Learning Operations",
      description:
        "End-to-end MLOps solutions including model deployment, monitoring, and automated retraining pipelines. We ensure your AI models maintain peak performance in production.",
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations for specific business needs, from recommendation engines to automated decision systems. We work closely with your team to deliver solutions that drive results.",
    },
     {
      title: "Generative AI & Foundation Models",
      description:
        "We build large-scale generative models for chatbots, content generation, and language reasoning. We also integrate GPT, LLaMA, and Claude into your CRM and service platforms.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We've delivered NLP solutions for legal document parsing (93%+ accuracy), email triage, conversational routing, sentiment scoring, and regulatory compliance scanning.",
    },
    {
      title: "Computer Vision (CV)",
      description:
        "Some of our projects in AI computer vision include defect detection on manufacturing lines, medical image segmentation, smart surveillance, and OCR for document digitization.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Develop AI software systems that generate predictions from time-series data. A forecasting model we built for a retail client reduced stockouts by 37% and improved sales prediction.",
    },
    {
      title: "Machine Learning Operations",
      description:
        "End-to-end MLOps solutions including model deployment, monitoring, and automated retraining pipelines. We ensure your AI models maintain peak performance in production.",
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations for specific business needs, from recommendation engines to automated decision systems. We work closely with your team to deliver solutions that drive results.",
    },
     {
      title: "Generative AI & Foundation Models",
      description:
        "We build large-scale generative models for chatbots, content generation, and language reasoning. We also integrate GPT, LLaMA, and Claude into your CRM and service platforms.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We've delivered NLP solutions for legal document parsing (93%+ accuracy), email triage, conversational routing, sentiment scoring, and regulatory compliance scanning.",
    },
    {
      title: "Computer Vision (CV)",
      description:
        "Some of our projects in AI computer vision include defect detection on manufacturing lines, medical image segmentation, smart surveillance, and OCR for document digitization.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Develop AI software systems that generate predictions from time-series data. A forecasting model we built for a retail client reduced stockouts by 37% and improved sales prediction.",
    },
    {
      title: "Machine Learning Operations",
      description:
        "End-to-end MLOps solutions including model deployment, monitoring, and automated retraining pipelines. We ensure your AI models maintain peak performance in production.",
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations for specific business needs, from recommendation engines to automated decision systems. We work closely with your team to deliver solutions that drive results.",
    },
     {
      title: "Generative AI & Foundation Models",
      description:
        "We build large-scale generative models for chatbots, content generation, and language reasoning. We also integrate GPT, LLaMA, and Claude into your CRM and service platforms.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We've delivered NLP solutions for legal document parsing (93%+ accuracy), email triage, conversational routing, sentiment scoring, and regulatory compliance scanning.",
    },
    {
      title: "Computer Vision (CV)",
      description:
        "Some of our projects in AI computer vision include defect detection on manufacturing lines, medical image segmentation, smart surveillance, and OCR for document digitization.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Develop AI software systems that generate predictions from time-series data. A forecasting model we built for a retail client reduced stockouts by 37% and improved sales prediction.",
    },
    {
      title: "Machine Learning Operations",
      description:
        "End-to-end MLOps solutions including model deployment, monitoring, and automated retraining pipelines. We ensure your AI models maintain peak performance in production.",
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations for specific business needs, from recommendation engines to automated decision systems. We work closely with your team to deliver solutions that drive results.",
    },
  ];

  return (
    <div className="min-h-screen px-3 lg:px-20">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Section - Sticky */}
          <div className="lg:w-2/5 lg:sticky lg:top-10 lg:self-start">
            <div>
              <h1 className=" lg:text-2xl font-bold">
                What Type of AI Models Do You Need? We Build It{" "}
              </h1>
              <Image
                src={aiImage}
                alt="demo"
                className="mt-5 rounded-br-[60px] rounded-lg"
              />
            </div>
          </div>

          {/* Right Section - Scrollable */}
          <div className="lg:w-3/5 space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-light-bg border-b-1 border-primary py-3 px-5 rounded-xl">
                <div className="">
                  <h3 className=" text-md font-bold hover:text-primary ">ᗎ {service.title}</h3>

                  <p className=" text-sm mt-2">  {service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTitleWithPoints;

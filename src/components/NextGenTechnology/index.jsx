

import NextGenCard from "@/blocks/NextGenCard";
import React from "react";


const NextGenTechnology = () => {
  const techData = [
    {
      id: 1,
      title: "OpenAI",
      services: "GPT-5, Codex, Embeddings, DALL-E, Whisper",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-green-50/70",
      borderColor: "border-green-300",
      iconBg: "bg-green-100",
      titleColor: "text-green-800",
      textColor: "text-green-600"
    },
    {
      id: 2,
      title: "Claude",
      services: "Opus 4.1, Sonnet, Memory, RLHF, Safety",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-orange-50/70",
      borderColor: "border-orange-300",
      iconBg: "bg-orange-100",
      titleColor: "text-orange-800",
      textColor: "text-orange-600"
    },
    {
      id: 3,
      title: "AWS Bedrock",
      services: "Titan, Nova, Lambda, Firecracker, SageMaker",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-yellow-50/70",
      borderColor: "border-yellow-300",
      iconBg: "bg-yellow-100",
      titleColor: "text-yellow-800",
      textColor: "text-yellow-600"
    },
    {
      id: 4,
      title: "Google Vertex AI",
      services: "Gemini 2.5, Deep Think, Flash-Lite, Pipelines, FeatureStore",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2"/>
          <polygon points="12,8 18,11.5 12,15 6,11.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-blue-50/70",
      borderColor: "border-blue-300",
      iconBg: "bg-blue-100",
      titleColor: "text-blue-800",
      textColor: "text-blue-600"
    },
    {
      id: 5,
      title: "Meta",
      services: "LLaMA 4, Segmenter, BlenderBot, Detectron, MoE",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-cyan-50/70",
      borderColor: "border-cyan-300",
      iconBg: "bg-cyan-100",
      titleColor: "text-cyan-800",
      textColor: "text-cyan-600"
    },
    {
      id: 6,
      title: "Microsoft Azure",
      services: "Cognitive, Synapse, BotService, FormRecognizer, OpenAI",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-indigo-50/70",
      borderColor: "border-indigo-300",
      iconBg: "bg-indigo-100",
      titleColor: "text-indigo-800",
      textColor: "text-indigo-600"
    },
    {
      id: 7,
      title: "Perplexity",
      services: "Sonar, Embeddings, Search, Contextualization, Retrieval",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2.31-.48 3.43-.82" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 12c0 5.52-4.48 10-10 10s-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-teal-50/70",
      borderColor: "border-teal-300",
      iconBg: "bg-teal-100",
      titleColor: "text-teal-800",
      textColor: "text-teal-600"
    },
    {
      id: 8,
      title: "Gemini",
      services: "Gemini 2.5, Deep Think, Flash-Lite, Pipelines, FeatureStore",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-purple-50/70",
      borderColor: "border-purple-300",
      iconBg: "bg-purple-100",
      titleColor: "text-purple-800",
      textColor: "text-purple-600"
    },
    {
      id: 9,
      title: "Co-pilot",
      services: "GitHub Copilot X, Copilot Chat, Copilot Labs, Copilot Voice, Copilot for Business",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-pink-50/70",
      borderColor: "border-pink-300",
      iconBg: "bg-pink-100",
      titleColor: "text-pink-800",
      textColor: "text-pink-600"
    },
    {
      id: 10,
      title: "Cursor",
      services: "AI Code Completion, Debug Assistant, Workflow Automations, IDE Integrations",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 13l6 6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-gray-50/70",
      borderColor: "border-gray-300",
      iconBg: "bg-gray-100",
      titleColor: "text-gray-800",
      textColor: "text-gray-600"
    },
    {
      id: 11,
      title: "Qodo",
      services: "No-Code AI Builder, AutoML, Integration Hub, Collaborative Workspace",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polygon points="10,8 16,12 10,16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-violet-50/70",
      borderColor: "border-violet-300",
      iconBg: "bg-violet-100",
      titleColor: "text-violet-800",
      textColor: "text-violet-600"
    }
  ];

  return (
    <div className="px-3 mt-7 py-16">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-center text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold">
          Pioneering Next-gen Technologies for Impactful Solutions
        </h2>
        <p className="text-sm max-w-3xl text-center mt-4 text-gray-600">
          Our precision-engineered systems optimize scalability and stability,
          ensuring continuous evolution and reliable performance within complex
          and rapidly changing operational settings.
        </p>
      </div>
      <div className="">
      <div className="flex flex-wrap justify-center gap-3 ">
        {techData.map((tech) => (
          <NextGenCard key={tech.id} data={tech} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default NextGenTechnology;
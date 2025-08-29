"use client";
import { useState, useEffect } from "react";
import colon from "../../assets/collon.svg";
import blue_colon from "../../assets/blue_colon.svg";
import Image from "next/image";
import PrimaryButton from "../../blocks/PrimaryButton";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ananya Mehra",
      position: "CEO & Founder Whitefield",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "DreamSquare made my home search so simple. I found a beautiful villa in Whitefield within days. The team was responsive and genuinely helpful!",
    },
    {
      id: 2,
      name: "Andoni",
      position: "CEO & Founder @ Molly - UK",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "I was relocating from Mumbai and had no time to explore in person. DreamSquare's platform helped me shortlist great options, and their agent support was top-notch!",
      featured: true,
    },
    {
      id: 3,
      name: "Priya Desai",
      position: "CTO RIC",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "I loved how easy it was to compare properties and schedule visits. Within a week, I booked a 2BHK in Pune — all thanks to DreamSquare!",
    },
    {
      id: 4,
      name: "Rahul Sharma",
      position: "Product Manager at TechCorp",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "The virtual tours and detailed property information saved me countless hours. I could filter exactly what I needed and found my dream home in Bangalore effortlessly.",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      position: "Marketing Director at InnovateX",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "Moving to India for work was stressful, but DreamSquare's international relocation support made finding accommodation seamless. Highly recommended!",
      featured: true,
    },
    {
      id: 6,
      name: "Vikram Patel",
      position: "Senior Developer at StartupHub",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      text: "Great platform with transparent pricing and no hidden fees. The customer service team was available 24/7 to answer all my queries during the home buying process.",
    },
  ];

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            What <span className="text-gradient-primary">Our Clients</span> Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-600 max-w-2xl mx-auto">
            We've helped people turn houses into homes. See what they're saying
            about us.
          </p>
        </div>

        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="flex items-start justify-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12">
            {[0, 1, 2].map((offset) => {
              const testimonialIndex =
                (currentSlide + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              const isCenter = offset === 1;

              return (
                <div
                  key={`${testimonial.id}-${currentSlide}`}
                  className={`flex-shrink-0 relative transition-all duration-500 ease-in-out ${
                    isCenter
                      ? "w-80 lg:w-96 xl:w-112 2xl:w-128 3xl:w-144"
                      : "w-64 lg:w-80 xl:w-96 2xl:w-112 3xl:w-128 opacity-60 translate-y-8"
                  }`}
                >
                  <div
                    className={`rounded-2xl lg:rounded-3xl transition-all duration-500 ${
                      isCenter
                        ? "bg-blue-600 text-white p-4 lg:p-6 xl:p-8 2xl:p-10 3xl:p-12 transform scale-105 lg:scale-110 shadow-2xl"
                        : "bg-gray-50 p-3 lg:p-4 xl:p-6 2xl:p-8 3xl:p-10"
                    } pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 3xl:pb-16`}
                  >
                    <div
                      className={`transition-all duration-500 flex justify-center mb-3 ${
                        isCenter
                          ? "text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl"
                          : "text-gradient-primary text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"
                      }`}
                    >
                      {isCenter ? (
                        <Image src={colon} alt="colon" />
                      ) : (
                        <Image src={blue_colon} alt="blue colon" />
                      )}
                    </div>
                    <p
                      className={`leading-relaxed transition-all duration-500 ${
                        isCenter
                          ? "text-white text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl"
                          : "text-gray-700 text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                  {/* Avatar positioned at bottom center, half inside half outside */}
                  <div
                    className={`absolute left-1/2 bottom-24 transform -translate-x-1/2 transition-all duration-500`}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`rounded-full  shadow-lg transition-all duration-500 ${
                        isCenter
                          ? "w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32"
                          : "w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28"
                      }`}
                    />
                  </div>
                  {/* Name and position below avatar */}
                  <div
                    className={`text-center transition-all duration-500 ${
                      isCenter
                        ? "mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 3xl:mt-32"
                        : "mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-28"
                    }`}
                  >
                    <h4
                      className={`font-semibold text-gray-900 mb-1 transition-all duration-500 ${
                        isCenter
                          ? "text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl"
                          : "text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-gray-600 transition-all duration-500 ${
                        isCenter
                          ? "text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl"
                          : "text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Navigation Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 px-2 relative transition-all duration-500 ${
                    index === currentSlide ? "" : "opacity-60 translate-y-4"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-3 sm:p-4 pb-8 sm:pb-10 transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 text-gray-900"
                    }`}
                  >
                    <div
                      className={`transition-all duration-500 flex justify-center mb-3 sm:mb-4 ${
                        index === currentSlide
                          ? "text-white text-3xl sm:text-4xl"
                          : "text-gradient-primary text-3xl sm:text-4xl"
                      }`}
                    >
                      {index === currentSlide ? (
                        <Image src={colon} alt="colon" />
                      ) : (
                        <Image src={blue_colon} alt="blue colon" />
                      )}
                    </div>
                    <p
                      className={`leading-relaxed text-sm sm:text-base transition-all duration-500 ${
                        index === currentSlide ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                  {/* Avatar positioned at bottom center, half inside half outside */}
                  <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`rounded-full  shadow-lg transition-all duration-500 ${
                        index === currentSlide
                          ? "w-12 h-12 sm:w-16 sm:h-16"
                          : "w-10 h-10 sm:w-14 sm:h-14"
                      }`}
                    />
                  </div>
                  {/* Name and position below avatar */}
                  <div className="text-center mt-16 sm:mt-10 px-2">
                    <h4
                      className={`font-semibold text-sm sm:text-base mb-1 text-gray-900 transition-all duration-500 ${
                        index === currentSlide ? "" : "text-xs sm:text-sm"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm text-gray-600 transition-all duration-500 ${
                        index === currentSlide ? "" : "text-xs"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <PrimaryButton 
            text={
              <>
                View All Testimonials
                <svg
                  className="ml-2 w-4 h-4 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            }
            className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-medium px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 rounded-full text-sm sm:text-base md:text-base lg:text-base transition-colors duration-200 flex items-center mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
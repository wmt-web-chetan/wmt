"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import clutchReview from "../../assets/clutch_review.svg"

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const leftColumnAwards = [
    {
      id: 1,
      title: "Top Website Developer 2023",
      icon: "🏆",
      color: "bg-orange-500",
      delay: 0,
    },
    {
      id: 2,
      title: "Clutch Champion 2023",
      subtitle: "Clutch",
      icon: "🏅",
      color: "bg-teal-600",
      delay: 200,
    },
    {
      id: 3,
      title: "Top iOS App",
      icon: "📱",
      color: "bg-red-500",
      delay: 400,
    },
    {
      id: 7,
      title: "Best UI/UX Design 2023",
      icon: "🎨",
      color: "bg-purple-500",
      delay: 600,
    },
    {
      id: 8,
      title: "Innovation Award 2023",
      subtitle: "Tech Excellence",
      icon: "💡",
      color: "bg-blue-500",
      delay: 800,
    },
    {
      id: 9,
      title: "Customer Choice 2022",
      icon: "⭐",
      color: "bg-green-500",
      delay: 1000,
    },
  ]

  const rightColumnAwards = [
    {
      id: 4,
      title: "Top Web Developer Real Estate",
      subtitle: "Clutch",
      icon: "🏠",
      color: "bg-gray-600",
      delay: 100,
    },
    {
      id: 5,
      title: "Top Web Development Company in 2022",
      icon: "⭐",
      color: "bg-yellow-500",
      delay: 300,
    },
    {
      id: 6,
      title: "Top Company Development in 2021",
      icon: "🚀",
      color: "bg-gray-700",
      delay: 500,
    },
    {
      id: 10,
      title: "Excellence in E-commerce",
      subtitle: "Digital Awards",
      icon: "🛒",
      color: "bg-indigo-500",
      delay: 700,
    },
    {
      id: 11,
      title: "Mobile App Excellence 2022",
      icon: "📲",
      color: "bg-pink-500",
      delay: 900,
    },
    {
      id: 12,
      title: "Rising Star Agency 2021",
      icon: "🌟",
      color: "bg-cyan-500",
      delay: 1100,
    },
  ]

  return (
    <>
      <style jsx>{`
        @keyframes marqueeUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes marqueeDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        
        .animate-marquee-up {
          animation: marqueeUp 30s linear infinite;
        }
        
        .animate-marquee-down {
          animation: marqueeDown 30s linear infinite;
        }

        .marquee-container {
          height: 600px;
          overflow: hidden;
          position: relative;
          width: 8rem; /* w-32 */
        }

        @media (min-width: 640px) {
          .marquee-container {
            width: 9rem; /* sm:w-36 */
          }
        }

        @media (min-width: 768px) {
          .marquee-container {
            width: 10rem; /* md:w-40 */
          }
        }

        @media (min-width: 1024px) {
          .marquee-container {
            width: 9rem; /* lg:w-36 */
          }
        }

        @media (min-width: 1280px) {
          .marquee-container {
            width: 10rem; /* xl:w-40 */
          }
        }

        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 150px;
          z-index: 10;
        }

        .marquee-container::before {
          top: 0;
          background: linear-gradient(to bottom, #1B1B35, transparent);
        }

        .marquee-container::after {
          bottom: 0;
          background: linear-gradient(to top, #1B1B35, transparent);
        }

        .marquee-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `}</style>

      <section 
        className="h-auto flex items-center" 
        style={{ backgroundColor: "#1B1B35" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 3xl:space-y-18">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                  <span className="text-blue-400">Awards</span>{" "}
                  <span className="text-white">That Define Our Journey</span>
                </h1>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty max-w-2xl">
                  From innovation to execution, our recognition speaks volumes about the quality, creativity, and
                  results we bring to every project.
                </p>
              </div>

              {/* Clutch Review Section */}
              <div className="flex justify-center lg:justify-start">
                <Image 
                  src={clutchReview} 
                  alt="Clutch Review" 
                  className="w-48 h-auto sm:w-56 md:w-64 lg:w-96"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-3 3xl:gap-6">
              {/* Left Column - Marquee Up */}
              <div className="marquee-container">
                <div className="marquee-content animate-marquee-up">
                  {/* Duplicate awards for seamless loop */}
                  {[...leftColumnAwards, ...leftColumnAwards].map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 border border-white/20 shadow-xl flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                    >
                      <div className="text-center space-y-2 sm:space-y-2 md:space-y-3">
                        <div
                          className={`
                            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14
                            ${award.color} rounded-full mx-auto flex items-center justify-center text-white
                            text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl
                          `}
                        >
                          {award.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm text-balance">
                            {award.title}
                          </h3>
                          {award.subtitle && (
                            <p className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm">
                              {award.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Marquee Down */}
              <div className="marquee-container">
                <div className="marquee-content animate-marquee-down">
                  {/* Duplicate awards for seamless loop */}
                  {[...rightColumnAwards, ...rightColumnAwards].map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 border border-white/20 shadow-xl flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                    >
                      <div className="text-center space-y-2 sm:space-y-2 md:space-y-3">
                        <div
                          className={`
                            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14
                            ${award.color} rounded-full mx-auto flex items-center justify-center text-white
                            text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl
                          `}
                        >
                          {award.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm text-balance">
                            {award.title}
                          </h3>
                          {award.subtitle && (
                            <p className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm">
                              {award.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardsSection
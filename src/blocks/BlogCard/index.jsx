import Image from "next/image"

export function FeaturedBlogCard({ title, highlightedText, description, author, date, tags, imageSrc, readMoreLink }) {
  return (
    <div className="relative overflow-hidden bg-white p-6 sm:p-8 lg:p-4 xl:p-6 2xl:p-6 3xl:p-6 rounded-3xl border border-disabled-text">
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <Image
          src={imageSrc || "/placeholder.svg?height=300&width=800&query=healthcare technology main image"}
          alt="Featured Article Image"
          width={800}
          height={300}
          className="w-full h-56 sm:h-64 lg:h-72 xl:h-96 object-fill rounded-lg"
        />
      </div>

      <div className="space-y-3 sm:space-y-4 lg:space-y-5">
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
          {title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs sm:text-sm lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        <a
          href={readMoreLink}
          className="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-xs sm:text-sm transition-colors"
        >
          Read more
        </a>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm sm:text-base">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">{author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

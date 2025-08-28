// components/LogoMarquee.js
const LogoMarquee = ({ 
  logos = [], 
  speed = 50, 
  pauseOnHover = true,
  title = "Trusted By 700+ Happy Clients",
  backgroundColor = "#2d2d44",
  direction = "left" 
}) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      className="w-full py-8 overflow-hidden relative"
      style={{ backgroundColor }}
    >
      {title && (
        <h2 className="text-center text-white text-lg font-normal mb-8 font-sans">
          {title}
        </h2>
      )}
      
      <div className={`overflow-hidden whitespace-nowrap relative ${pauseOnHover ? 'hover:[&>div]:pause' : ''}`}>
        <div 
          className={`inline-flex gap-12 items-center ${
            direction === 'right' 
              ? 'animate-[scrollReverse_linear_infinite]' 
              : 'animate-[scroll_linear_infinite]'
          }`}
          style={{
            animationDuration: `${logos.length * speed}s`
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id || index}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-[60px]"
            >
              <div
                className="max-w-full max-h-full brightness-75 contrast-125 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                dangerouslySetInnerHTML={{ __html: logo.svg || '' }}
                title={logo.alt || `Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LogoMarquee;

// Usage example:
/*
import LogoMarquee from '@/components/LogoMarquee';

const logos = [
  { 
    id: 1, 
    svg: '<svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="60" fill="#ffffff"/><text x="60" y="35" text-anchor="middle" fill="#000">Logo 1</text></svg>',
    alt: 'Company 1'
  },
  { 
    id: 2, 
    svg: '<svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="25" r="20" fill="#ffffff"/><text x="50" y="30" text-anchor="middle" fill="#000">Logo 2</text></svg>',
    alt: 'Company 2'
  },
  // Add more logos with SVG strings...
];

<LogoMarquee
  logos={logos}
  title="Trusted By 700+ Happy Clients"
  speed={50}
  pauseOnHover={true}
  backgroundColor="#2d2d44"
  direction="left"
/>
*/
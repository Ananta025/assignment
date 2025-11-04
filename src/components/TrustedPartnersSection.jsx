import React from 'react';

export default function TrustedPartnersSection() {
  const partners = [
    { name: "Capsule", logo: "/logo-1.png" },
    { name: "Biosynthesis", logo: "/logo-2.png" },
    { name: "Galileo", logo: "/logo-3.png" },
    { name: "Spherule", logo: "/logo-4.png" },
    { name: "FocalPoint", logo: "/logo-5.png" },
    { name: "Galileo", logo: "/logo-3.png" },
    { name: "Nietzsche", logo: "/logo-5.png" },
    { name: "Spherule", logo: "/logo-4.png" }
  ];

  return (
    <section className="w-full bg-[#f6f4e9] py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[16px] font-['Cormorant_Garamond'] uppercase tracking-widest text-black">
            TRUSTED PARTNERS
          </h2>
        </div>

        {/* Scrolling Partners */}
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-scroll-partners">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="shrink-0 mx-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="h-8 flex items-center justify-center min-w-[120px]">
                  {/* Placeholder for logo - replace with actual image */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto object-contain"
                  />
                 
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="shrink-0 mx-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="h-8 flex items-center justify-center min-w-[120px]">
                  {/* Placeholder for logo - replace with actual image */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto object-contain"
                  />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-partners {
          animation: scroll-partners 30s linear infinite;
        }

        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
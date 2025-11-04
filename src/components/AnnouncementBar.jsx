import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export default function AnnouncementBar() {
  const announcements = [
    "EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW.",
    "EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW.",
    "EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full bg-[#143f35] text-white">
      <div className="mx-auto">
        <div className="flex items-center justify-center h-11 relative">
          {/* Scrolling Announcement Text */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-center space-x-12 animate-scroll">
              {[...announcements, ...announcements].map((text, index) => (
                <div key={index} className="flex items-center space-x-12 whitespace-nowrap">
                  <span className="text-sm font-normal tracking-wide">
                    {text}
                  </span>
                  <Plus className="w-3 h-3 rotate-45 shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
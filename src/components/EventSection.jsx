import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EventsSection() {

  return (
    <section className="w-full bg-[#f6f4e9] pt-20">
      <div className="max-w-8xl mx-auto px-20">
        {/* Header */}
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-px h-8 bg-gray-800"></div>
              <h2 className="text-[16px] uppercase font-['Cormorant_Garamond'] tracking-wide text-black">
                UNFORGETTABLE EVENTS AT LUXORT
              </h2>
            </div>
          </div>

          <div className="col-span-7">
            <h3 className="text-5xl font-['Satoshi-Light'] font-light leading-tight mb-6 max-w-2xl">
              Celebrate Life's Finest Moments in Style and Elegance
            </h3>
            <p className="text-[16px] font-['Satoshi-Light'] text-gray-700 leading-relaxed max-w-2xl">
              At Luxort, we create extraordinary settings for unforgettable events. Whether you're planning an intimate gathering or a grand celebration.
            </p>
          </div>
        </div>        
      </div>
    </section>
  );
}
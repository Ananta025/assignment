import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      label: "COMFY AREA",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      label: "ELEGANT LOBBY",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      label: "RELAXATION ZONE",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full min-h-screen bg-[#f6f4e9] py-20">
      <div className="max-w-8xl mx-auto px-20">
        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
            
          {/* Left Column - Quote */}
          <div className="col-span-5 flex flex-col justify-between h-full">
            <div className="pr-12">
              {/* About Luxort - Top */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-px h-8 bg-gray-800"></div>
                <h2 className="text-[16px] uppercase font-['Cormorant_Garamond'] tracking-wide text-black">
                  ABOUT LUXORT
                </h2>
              </div>
            </div>

            {/* Quote and Author - Bottom */}
            <div className="pr-12 mt-auto">
              <p className="text-2xl font-base font-['Satoshi-Light'] mb-8 max-w-[430px]">
                Luxori is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your perfect escape.
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  {/* <img 
                    src=""
                    alt="Roberto Pollye"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black font-['Satoshi-Light'] ml-2">Roberto Pollye</p>
                  <p className="text-xs text-gray-600 font-['Satoshi-Light']">Founder of Luxort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="col-span-7">
            <div className="col-span-10">
            <h3 className="text-4xl font-light leading-tight mb-8 font-['Satoshi-Light']">
              Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed max-w-3xl mb-6 font-['Satoshi-Light']">
              At Luxort, we redefine the meaning of luxury hospitality, our hotel offers a seamless blend of classic sophistication and modern comfort, providing guests with an unparalleled experience.
            </p>
          </div>
            <div className="relative">
              {/* Carousel Images */}
              <div className="flex items-start gap-4 overflow-x-hidden">
                {slides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative transition-all duration-500 rounded-sm overflow-hidden cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-gray-300 h-[322px]'
                          : 'bg-gray-600 h-[268px] opacity-80'
                      }`}
                      style={{
                        width: isActive ? '600px' : '510px'
                      }}
                    >
                      {/* Only active image has bottom text bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[54px] bg-white flex items-center justify-between px-6">
                          <div className="flex items-center gap-2 text-[#1d322b] text-sm font-medium">
                            <span className="text-gray-500">0{slide.id}</span>
                            <span>{slide.label}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNext();
                            }}
                            className="flex items-center gap-1 text-[#1d322b] text-sm font-medium hover:text-emerald-900 transition-colors"
                          >
                            NEXT <ArrowRight size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between w-full mt-8">
                <button 
                  onClick={handlePrev}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-0.5 transition-all ${
                        index === currentSlide 
                          ? 'w-12 bg-gray-900' 
                          : 'w-8 bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
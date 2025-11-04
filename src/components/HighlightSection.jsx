import React, { useState } from 'react';

export default function HighlightsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: "SWIMMING POOL",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1400&h=600&fit=crop",
      description: "Dive into luxury with our pristine swimming pool"
    },
    {
      title: "FINE DINING RESTAURANTS",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=600&fit=crop",
      description: "Savor culinary excellence in our world-class restaurants"
    },
    {
      title: "LUXURY ROOMS & SUITES",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&h=600&fit=crop",
      description: "Experience comfort and elegance in our premium accommodations"
    },
    {
      title: "SPA & WELLNESS",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&h=600&fit=crop",
      description: "Rejuvenate your body and mind in our tranquil spa"
    }
  ];

  return (
    <section className="w-full bg-[#f6f4e9] py-20">
      <div className="max-w-8xl mx-auto px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[16px] font-['Cormorant_Garamond'] uppercase tracking-widest text-gray-600 mb-4">
            HOTEL HIGHLIGHTS
          </p>
          <h2 className="text-5xl font-light mb-6 tracking-tight font-['Satoshi-Light']">
            Experience the Extraordinary
          </h2>
          <p className="text-[16px] text-gray-700 max-w-xl mx-auto leading-relaxed font-['Satoshi-Light']">
            Experience elegance and comfort in our Luxury Rooms & Suites, where modern
            amenities and timeless design create the perfect retreat.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-4 gap-0">
          {highlights.map((highlight, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 text-sm font-['Satoshi-Light'] rounded-md uppercase tracking-wide transition-all ${
                activeTab === index
                  ? 'bg-white text-black font-medium'
                  : 'bg-transparent text-gray-700 hover:text-gray-900'
              }`}
            >
              {highlight.title}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="relative w-full h-[473px] bg-[#c4c4c4] rounded-sm">
        </div>

        {/* Optional: Description below image */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">
            {highlights[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}
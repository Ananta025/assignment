import React from 'react';
import { ArrowRight } from 'lucide-react';
import Carousel from './Carousel.jsx';

export default function HeroSection() {

  return (
    <section className="w-full  bg-[#f6f4e9] ">
      <div className="max-w-9xl mx-auto px-20 pt-25">
        {/* Header Content */}
        <div className="mb-16 flex justify-between ">
          <h1 className="text-9xl font-['Cormorant_Garamond'] font-light tracking-tighter leading-none">
            WELCOME TO<br />LUXORT
          </h1>
          
          <div className="flex items-end justify-end">
            <div className="w-96 space-y-6">
              <p className="text-sm text-gray-700 leading-relaxed font-['Satoshi-Light']">
                Discover a world where luxury and comfort blend seamlessly,
                offering unforgettable experiences in a setting of elegance and
                tranquility.
              </p>
              
              <div className="flex gap-4">
                <button className="shadow-[inset_0_-4px_4px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.25),0_0_0_2px_rgba(28,69,59,0.2)] px-6 py-3 bg-[#143f35] rounded-sm text-white text-sm font-medium hover:bg-emerald-800 transition-colors ">
                  BOOK YOUR STAY
                </button>
                <button className="shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.2),0_0_0_2px_rgba(0,0,0,0.02)] px-6 py-3 bg-white text-gray-900 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors rounded-sm">
                  EXPLORE OUR SUITES
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
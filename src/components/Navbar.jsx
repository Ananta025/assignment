import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f6f4e9] py-2">
      <div className="max-w-8xl mx-auto px-20">
        <div className="flex items-center justify-between h-12">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              HOME
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              ABOUT
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
              EVENTS
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="8" fill="black"/>
                  <line x1="20" y1="0" x2="20" y2="8" stroke="black" strokeWidth="2"/>
                  <line x1="20" y1="32" x2="20" y2="40" stroke="black" strokeWidth="2"/>
                  <line x1="0" y1="20" x2="8" y2="20" stroke="black" strokeWidth="2"/>
                  <line x1="32" y1="20" x2="40" y2="20" stroke="black" strokeWidth="2"/>
                  <line x1="6" y1="6" x2="12" y2="12" stroke="black" strokeWidth="2"/>
                  <line x1="28" y1="28" x2="34" y2="34" stroke="black" strokeWidth="2"/>
                  <line x1="34" y1="6" x2="28" y2="12" stroke="black" strokeWidth="2"/>
                  <line x1="12" y1="28" x2="6" y2="34" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tighter font-['Cormorant_Garamond']">LUXORT</span>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">EN</button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">ES</button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">FR</button>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Phone Number */}
            <a href="tel:+1237564890" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              +123 7564 8970
            </a>

            {/* Login Button */}
            <a
              href="#"
              className="flex items-center border-b pb-1 space-x-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              <span>LOGIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
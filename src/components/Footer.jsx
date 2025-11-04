import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1a] text-white py-10 px-20">
      <div className="max-w-8xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-12">
          {/* Logo and Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              {/* Sun Logo */}
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="8" fill="white"/>
                  <line x1="20" y1="0" x2="20" y2="8" stroke="white" strokeWidth="2"/>
                  <line x1="20" y1="32" x2="20" y2="40" stroke="white" strokeWidth="2"/>
                  <line x1="0" y1="20" x2="8" y2="20" stroke="white" strokeWidth="2"/>
                  <line x1="32" y1="20" x2="40" y2="20" stroke="white" strokeWidth="2"/>
                  <line x1="6" y1="6" x2="12" y2="12" stroke="white" strokeWidth="2"/>
                  <line x1="28" y1="28" x2="34" y2="34" stroke="white" strokeWidth="2"/>
                  <line x1="34" y1="6" x2="28" y2="12" stroke="white" strokeWidth="2"/>
                  <line x1="12" y1="28" x2="6" y2="34" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-4xl tracking-tighter font-['Cormorant_Garamond']">LUXORT</span>
            </div>
            <p className="text-[16px] text-gray-200 leading-relaxed font-['Satoshi-Light']">
              Luxort combines timeless elegance with modern luxury, offering unparalleled comfort and unforgettable experiences
            </p>
          </div>

          {/* Quick Links and Social Media */}
          <div className="flex gap-32">
            {/* Quick Links */}
            <div>
              <h3 className="text-base mb-6 font-light font-['Satoshi-Light']">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-['Satoshi-Light']">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-base mb-6 font-light font-['Satoshi-Light']">Social Media</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-['Satoshi-Light']">
                <li><a href="#" className="hover:text-white transition-colors">X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t font-['Satoshi-Light'] border-gray-700 flex justify-between items-center text-sm text-gray-400">
          <p>© 2025 Luxort, All Right Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Handle newsletter subscription
      setEmail('');
    }
  };

  return (
    <div className="h-[540px] bg-[#55615e] flex items-center justify-center p-8">
      <div className="w-full text-center">
        {/* Heading */}
        <h1 className="text-5xl font-['Cormorant_Garamond'] text-[#F6F4E9] mb-12">
          GET EXCLUSIVE OFFERS,<br />
          EVENT UPDATES, AND INSIDER NEWS
        </h1>

        {/* Form */}
        <div className="space-y-4 max-w-lg mx-auto">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            className="shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.2),0_0_0_2px_rgba(0,0,0,0.02)] w-full px-6 py-3 text-gray-700 rounded-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="shadow-[inset_0_-4px_4px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.25),0_0_0_2px_rgba(28,69,59,0.2)] w-full px-6 py-3 bg-emerald-900 rounded-sm text-white text-sm tracking-widest hover:bg-emerald-800 transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EventCarousel() {
  const slides = [
    { id: 1, label: "WEDDINGS" },
    { id: 2, label: "DINING" },
    { id: 3, label: "EVENTS" },
    { id: 4, label: "SPA" },
  ];

  const [active, setActive] = useState(1);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full bg-[#f6f4e9] pb-20 pt-5">
      <div className="w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-start gap-4 w-max -ml-72">
          {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={slide.id}
              className={`relative transition-all duration-500 rounded-md overflow-hidden cursor-pointer ${
                isActive
                  ? "bg-gray-300 w-[600px] h-[322px]"
                  : "bg-gray-600 w-[510px] h-[268px] opacity-80"
              }`}
              onClick={() => setActive(index)}
            >
              {/* Only active one has bottom white text bar */}
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
                    className="flex items-center gap-1 text-[#1d322b] text-sm font-medium"
                  >
                    NEXT <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

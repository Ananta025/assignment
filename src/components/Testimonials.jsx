export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jerome Bell",
      country: "Israel",
      date: "5/27/19",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
    {
      name: "Savannah Nguyen",
      country: "Poland",
      date: "9/18/23",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
    {
      name: "Ronald Richards",
      country: "Guinea",
      date: "5/19/25",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
    {
      name: "Courtney Henry",
      country: "Monaco",
      date: "1/15/20",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
    {
      name: "Arlene McCoy",
      country: "Saint Barthelemy",
      date: "5/19/12",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
    {
      name: "Eleanor Pena",
      country: "Sao Tome and Principe",
      date: "5/19/25",
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    },
  ];

  return (
    <section className="w-full bg-[#f6f4e9] py-16 min-h-screen">
      <div className="max-w-8xl mx-auto px-20  flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="lg:w-2/5 flex flex-col justify-center">
          <p className="border-l pl-2 text-[16px] tracking-wide font-['Cormorant_Garamond'] text-black uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl font-light text-[#0A1F1A] mb-6 font-['Satoshi-Light']">
            What Our Guests Say
          </h2>
          <p className="text-[#0A1F1A] mb-8 font-['Satoshi-Light'] text-[16px]">
            Exceptional Experiences, Shared by Those Who’ve Lived Them.
          </p>
          <button className="bg-[#143f35] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.25),0_0_0_2px_rgba(28,69,59,0.2)] text-white w-fit px-6 py-3 rounded-sm text-sm tracking-wide hover:bg-[#214b3e] transition">
            READ MORE TESTIMONIALS
          </button>
        </div>

        {/* Right Side - Staggered Testimonials */}
        <div className="lg:w-3/5 relative overflow-hidden">
          {/* Scrollable area */}
          <div className="h-[550px] overflow-y-scroll flex gap-6 pr-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Left Column */}
            <div className="flex flex-col gap-5 mt-10">
              {testimonials
                .filter((_, i) => i % 2 === 0)
                .map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-md shadow-sm p-5 flex flex-col gap-3 transition w-[340px]"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                        <span className="text-black font-medium text-sm font-['Satoshi-Light']">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm font-['Satoshi-Light']">
                        {item.country}
                      </span>
                    </div>
                    <p className="text-gray-700 text-[16px] leading-relaxed font-['Satoshi-Light']">
                      {item.text}
                    </p>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                ))}
            </div>

            {/* Right Column (offset vertically) */}
            <div className="flex flex-col gap-5 -mt-16">
              {testimonials
                .filter((_, i) => i % 2 !== 0)
                .map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-md shadow-sm p-5 flex flex-col gap-3 transition w-[340px]"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                        <span className="text-black font-['Satoshi-Light'] font-medium text-sm">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm font-['Satoshi-Light']">
                        {item.country}
                      </span>
                    </div>
                    <p className="text-gray-700 font-['Satoshi-Light'] text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-[#f6f4e9] to-transparent pointer-events-none"></div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#f6f4e9] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

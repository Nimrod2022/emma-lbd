import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#FBF5F5] h-full flex flex-col items-center ">
      <div className="text-4xl md:text-5xl font-bold text-center text-[#331c1b] mt-[40px] mb-[12px]">
        <h1>Emma Nashipae</h1>
      </div>

      <div className="w-full flex ">
        {/* Left - Portrait */}
        <div className="justify-center md:justify-start">
          <img
            src="/profile-photo.png"
            alt="Emma Nashipae"
            className="h-full w-full object-cover"
          />
        </div>

        {/* ✅ Center - Overlapping Card */}
        <div className="md:mt-[180px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] bg-white  shadow-md z-10 w-[90%] md:size-[500px] text-center md:text-left">
          <div className="md:px-[20px] my-[70px]">
            <p className="uppercase md:text-[18px] font-normal text-gray-600 mb-3">
              Welcome to LBD – Your Empowerment Partner
            </p>
            <p className="text-[24px] font-medium  leading-relaxed">
              Studying Or Moving To Austria?
              <br />
              Planning A European Tour? Feeling <br />
              Stuck? I Can Help You Navigate <br />
              Transitions, Integrate Smoothly, <br /> And Seize New
              Opportunities.
            </p>
            <button className="mt-6 bg-[#8e3e3e] text-white px-6 py-3 rounded hover:bg-[#6e2e2e] transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right - Lifestyle Image */}
        <div className="hidden md:block mt-[43px]  justify-end flex-shrink-0 ml-auto">
          <img
            src="/home-photo.png"
            alt="Lifestyle scene"
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}

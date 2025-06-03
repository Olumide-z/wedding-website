"use client";

import ImageSlider from "@/components/ImageSlider";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { MenuButton } from "@/components/MenuButton";
import Story from "@/components/Story";
import Tidbits from "@/components/Tidbits";
import Hotels from "@/components/Hotels";
import Registry from "@/components/Registry";
import QandA from "@/components/QandA";
import Image from "next/image";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    // Hide arrow after interaction
    const alreadyViewed = sessionStorage.getItem("arrowDismissed");
    if (alreadyViewed) {
      setShowArrow(false);
    }
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: 600, // adjust this value to how far down you want to scroll
      behavior: "smooth",
    });
    setShowArrow(false);
    sessionStorage.setItem("arrowDismissed", "true");
  };

  useEffect(() => {
    const targetDate = new Date("2025-10-24T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initialize immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen lg:overflow-hidden">
      {/* Left Panel */}
      <div className="relative w-full lg:w-3/5 lg:fixed lg:h-full z-10 min-h-[80vh]">
        <ImageSlider />
        <div className="absolute top-6 left-4 z-20">
          <MenuButton onClick={() => setSidebarOpen(true)} />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:ml-[60%] lg:w-2/5 h-screen lg:overflow-y-auto px-6 py-10">
        <div className="md:max-w-[500px] w-full mx-auto text-center">
          <div className="relative rounded-t-full bg-[#994610] h-[700px] text-white py-10 flex flex-col items-center text-center">
            <div className="absolute">
              <Image
                src="/images/sun.png"
                alt="sun"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="mt-15 w-full">
              <div className="text-[2rem] mt-8 header">Friday</div>
              <h2 className="text-[1.8rem] header">October 24, 2025</h2>
              <p className="mt-2 text-[1.8rem] header">Ibadan, Oyo, Nigeria</p>
              <p className="mt-4 tracking-widest font-semibold">
                {countdown.days} DAYS {countdown.hours} HRS {countdown.minutes}{" "}
                MINS
              </p>
              <a
                href="https://withjoy.com/bolaji-and-oyinda/rsvp"
                target="_blank"
              >
                <button className="mt-10 px-6 py-2 border-2 cursor-pointer border-white rounded-full">
                  RSVP
                </button>
              </a>
            </div>

            {/* Animated arrow */}
            {showArrow && (
              <button
                onClick={handleScroll}
                className="absolute bottom-12 flex flex-col items-center text-white animate-bounce"
              >
                <span className="text-sm mb-1">View Details</span>
                <svg
                  className="w-12 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        <Story />
        <Tidbits />
        <Hotels
          name="Golden Tulip Ibadan"
          distance="3.9 miles away"
          imageUrl="/images/hotel.webp"
          externalLink="https://withjoy.com/bolaji-and-oyinda/accommodation-place/07e921a6-7785-4e5d-9276-8f984d50fcf6"
          index={1}
        />
        <div className="relative h-[600px] w-full lg:hidden block">
          <Image src="/images/03.jpg" alt="image" fill objectFit="cover" />
        </div>
        <Registry />

        <div className="relative h-[600px] w-full lg:hidden block">
          <Image src="/images/04.jpg" alt="image" fill objectFit="cover" />
        </div>

        <QandA />
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

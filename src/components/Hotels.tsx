import React from "react";

import Image from "next/image";
import { Search } from "lucide-react";


type HotelCardProps = {
  name: string;
  distance: string;
  imageUrl: string;
  externalLink: string;
  index?: number;
};

export default function Hotels({
  name,
  distance,
  imageUrl,
  externalLink,
  index,
}: HotelCardProps) {
  return (
    <div className="pt-12 pb-6 md:max-w-md w-full mx-auto text-[#3A3A3A]" id="hotel">
      <h3 className="text-center header text-3xl mb-5">Where to Stay</h3>
      <p className="text-center">
        We have picked this hotel for you to enjoy your stay in Ibadan. Happy
        exploring 💥
      </p>
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-xl p-4 group my-7"
      >
        <div className="relative w-full h-56 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {index !== undefined && (
            <div className="absolute top-2 left-2 bg-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-semibold">
              {index}
            </div>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{distance}</p>
          <button className="mt-4 h-[3rem] cursor-pointer w-full bg-black text-white py-2 rounded-full text-sm font-[600]">
            Select Hotel
          </button>
        </div>
      </a>
      <div className="flex items-center justify-center">
        <a
          href="https://withjoy.com/bolaji-and-oyinda/hotel/search?utm_campaign=explore_other_options&utm_medium=web&utm_source=website_accommodations_page" // Replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 font-semibold rounded-full hover:bg-green-50 transition"
          style={{
            border: "2px solid rgba(174, 190, 148, 1)",
            color: "rgba(174, 190, 148, 1)",
          }}
        >
          <Search className="w-4 h-4 mr-2" />
          Explore Other Options
        </a>
      </div>
    </div>
  );
}

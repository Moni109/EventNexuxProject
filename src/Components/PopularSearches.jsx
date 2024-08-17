import React from 'react';

const CardSection = () => {
  return (
    <div className='mt-16 mb-10'>
      {/* First Row of Cards */}
      <div className="flex flex-wrap justify-center">
        {/* Card 1 */}
        <div className="w-1/3 max-w-xs rounded-md overflow-hidden shadow-lg bg-red-300 p-4 mt-10">
          <div className="text-lg text-blue-900">EXPLORE</div>
          <h3 className="text-2xl font-bold">Weddings</h3>
          <p className="text-gray-700 text-base">Browse weddings to find your look.</p>
          <img
            src="https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E="
            alt="A wedding couple embracing each-other."
            className="w-60 ml-12 mt-4"
          />
          <a
            href="/marketplace/wedding-photographers-new-york-ny?sort=featured"
            className="inline-block ml-10 m-6 bg-transparent border border-red-600 hover:bg-red-700 text-red-500 hover:text-white font-bold py-2 px-4 rounded transition-colors"
          >
            See Weddings
          </a>
        </div>

        {/* Card 2 - Larger and slightly lifted */}
        <div className="w-1/3 max-w-sm rounded-md overflow-hidden shadow-lg p-4 relative transform scale-110 -translate-y-4 ml-10 mb-10">
          <img
            src="https://www.theknot.com/tk-media/images/6b68a235-931a-4372-a785-34d80f2fb4f8~rs_185.h"
            alt="An aerial view of wedding guests at tables under white umbrellas."
            className="w-full"
          />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Outdoor.webm" type="video/webm" />
            <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Outdoor.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
            <div>
              <div className="text-sm">RECEPTION VENUES</div>
              <h3 className="text-2xl">Outdoor Spaces</h3>
              <a
                href="/marketplace/wedding-reception-venues-new-york-ny?venue-amenities=uncovered-outdoor-wedding-reception-site+covered-outdoor-wedding-reception-site&sort=featured"
                className="inline-block mt-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              >
                See outdoor spaces
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-1/3 max-w-xs overflow-hidden shadow-lg bg-yellow-600 p-4 ml-10 rounded-md mt-10">
          <div className="text-lg text-yellow-900">EXPLORE</div>
          <h3 className="text-2xl font-bold">Catering</h3>
          <p className="text-gray-700 text-base">A wide range of variety dishes</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QXuU4HZ5yrdnSLe0qSSOnlpnqRXRII9ezg&s"
            alt="A wide range of variety dishes"
            className="w-60 ml-12 mt-4"
          />
          <a
            href="/marketplace/wedding-cake-bakeries-new-york-ny?sort=featured"
            className="inline-block ml-10 m-6 bg-transparent border border-b-red-950 hover:bg-yellow-900 text-black hover:text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Browse Caterers
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        <div className="w-1/3 max-w-xs rounded-md overflow-hidden shadow-lg p-4 relative transform scale-110 -translate-y-4 mr-10 mt-10">
          <img
            src="https://www.theknot.com/tk-media/images/6b68a235-931a-4372-a785-34d80f2fb4f8~rs_185.h"
            alt="An aerial view of wedding guests at tables under white umbrellas."
            className="w-full"
          />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Historic.webm" type="video/webm" />
            <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Historic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
            <div>
              <div className="text-sm">RECEPTION VENUES</div>
              <h3 className="text-2xl">Outdoor Spaces</h3>
              <a
                href="/marketplace/wedding-reception-venues-new-york-ny?venue-amenities=uncovered-outdoor-wedding-reception-site+covered-outdoor-wedding-reception-site&sort=featured"
                className="inline-block mt-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              >
                See outdoor spaces
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3 max-w-sm rounded-md overflow-hidden shadow-lg bg-pink-400 p-4">
          <div className="text-lg text-blue-900">EXPLORE</div>
          <h3 className="text-2xl font-bold">Photography</h3>
          <p className="text-gray-700 text-base">Browse Gallery to find your look.</p>
          <img
            src="https://img.freepik.com/premium-photo/dslr-camera-click-blur-background_889987-85.jpg"
            alt="A wedding couple embracing each-other."
            className="w-60 ml-12 mt-4"
          />
          <a
            href="/marketplace/wedding-photographers-new-york-ny?sort=featured"
            className="inline-block ml-10 m-6 bg-transparent border border-red-950 hover:bg-red-700 text-red-700 hover:text-white font-bold py-2 px-4 rounded transition-colors"
          >
            See Photos
          </a>
        </div>

        {/* Card 3 */}
        <div className="w-1/3 max-w-xs rounded-md overflow-hidden shadow-lg p-4 relative transform scale-110 -translate-y-4 ml-10 mt-10">
          <img
            src="https://www.theknot.com/tk-media/images/6b68a235-931a-4372-a785-34d80f2fb4f8~rs_185.h"
            alt="An aerial view of wedding guests at tables under white umbrellas."
            className="w-full"
          />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
           <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Barn.webm" type="video/webm"/>
           <source src="https://static.xoedge.com/xo-homepage/2023/vhp-marketplace/Barn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
            <div>
              <div className="text-sm">Furnitures</div>
              <h3 className="text-2xl">Outdoor Spaces</h3>
              <a
                href="/marketplace/wedding-reception-venues-new-york-ny?venue-amenities=uncovered-outdoor-wedding-reception-site+covered-outdoor-wedding-reception-site&sort=featured"
                className="inline-block mt-4 border-lime-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              >
                See outdoor spaces
              </a>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}


export default CardSection;




{/* import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { slides } from "./Slides";

export default function PopularSearches() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="my-10 mx-6 p-6 bg-white rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold font-poppins text-gray-800">
          Popular Searches
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out my-6"
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center px-2"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-7 bg-white shadow-lg rounded-b-lg flex justify-center items-center w-full">
                <h2 className="text-xl font-bold text-center">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md transition-opacity ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md transition-opacity ${
            currentIndex >= slides.length - 4
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex >= slides.length - 4}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
} */}

import React from 'react'
import Home3 from "../../assets/Home/Banner5.png"
import Home4 from "../../assets/Home/Banner4.png"

const banner = [
  { id: 1, img: Home3, stitle: "Birthday Decorations" },
  { id: 2, img: Home4, stitle: "Party Hats" },]

function Banner() {
  return (
    <div className="container mx-auto mt-6 lg:mt-15 px-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10">
        {[
          { img: Home3, title: "Biggest Selection of", title2: "Party Decoration In Sri Lanka" },
          { img: Home4, title: "Biggest Selection of", title2: "Masquerade Masks In Sri Lanka" }
        ].map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl w-full"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[220px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 sm:top-4 md:top-6 lg:top-12 left-1 sm:left-2 md:left-4 px-2 sm:px-3 py-1 bg-opacity-50 rounded-xl max-w-[85%]">
              <p className="text-[8px] sm:text-xs md:text-base lg:text-xl font-semibold text-white">
                {item.title}
              </p>
              <h1 className="text-[10px] sm:text-sm md:text-lg lg:text-2xl font-bold text-white mt-1">
                {item.title2}
              </h1>
              <button className="mt-2 sm:mt-3 md:mt-4 lg:mt-8 bg-red-600 hover:bg-orange-500 text-white text-[6px] sm:text-xs md:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-[2px] sm:py-1 lg:py-2 rounded-2xl shadow transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner

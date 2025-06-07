import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

// Import your images
import Home1 from "../../assets/Home/1.jpg";
import Home2 from "../../assets/Home/7.jpg";
import Home3 from "../../assets/Home/3.png";
import Home4 from "../../assets/Home/5.jpg";
import Home5 from "../../assets/Home/Home6.png";
import Home6 from "../../assets/Home/9.png";
import Home7 from "../../assets/Home/8.png";
import Home8 from "../../assets/Home/10.jpg";
import Home9 from "../../assets/Home/11.png";
import Home10 from "../../assets/Home/12.png";

// Product data
const Products = [
  { id: 1, img: Home1, title: "Birthday Decorations" },
  { id: 2, img: Home2, title: "Party Hats" },
  { id: 3, img: Home3, title: "Love Heart Bouquet" },
  { id: 4, img: Home5, title: "DJ Sound Systems" },
  { id: 5, img: Home4, title: "Birthday Backdrops" },
  { id: 6, img: Home9, title: "Party hats" },
  { id: 7, img: Home6, title: "Neon Glow Party Supplies" },
  { id: 8, img: Home7, title: "Solid Led Balloons" },
  { id: 9, img: Home8, title: "Part Tablewares " },
  { id: 10, img: Home10, title: "Candles" },
];

// Custom arrows
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700"
      onClick={onClick}
    >
      ❯
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700"
      onClick={onClick}
    >
      ❮
    </div>
  );
};

// Main component
function LatestProducts() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
   
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 md:mt-10 relative  sm:mt[-20px] ">
      <div className="mb-5 text-center">
        <h2 className="text-xl md:text-2xl sm:text-2xl font-bold lg:mb-5 mb-4">Latest Products</h2>
        <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-sm max-w-xl mx-auto lg:mb-12">
          Discover our newest arrivals, featuring trendy designs and must-have party essentials. Stay ahead of the celebration game with fresh, festive items updated regularly.
        </p>
      </div>

      <Slider {...settings}>
        {Products.map((product) => (
          <div key={product.id} className="pb-3  w-full">
            <div className=" flex flex-col shadow-lg px-2 rounded-xl md:h-[190px] text-center md:w-[150] w-[100px] h-[140px]  md:gap-1 lg:h-[210px] lg:w-[165px] sm:h-[180px] sm:w-[140px] mx-auto mt-[-15px] xl:w-[200px] xl:h-[270px] py-4 group relative overflow-hidden">
              <img
                className="w-full xl:h-[185px] sm:h-[120px] lg:h-[130px] h-[70px] object-cover lg:gap-2 rounded-lg transition-transform duration-300 group-hover:scale-105 "
                src={product.img}
                alt={product.title}
              />
              <p className="mt-2 text-[10px] sm:text-[12px] md:text-[12px] text-gray-700">{product.title}</p>
              <div className="w-full flex items-center text-[8px] sm:text-[10px] md:text-[12px] md:text-sm justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestProducts;

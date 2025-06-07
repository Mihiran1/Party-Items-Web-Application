
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade} from 'swiper/modules';
import Home1 from "../../assets/Home/Home1.png"
import Home2 from "../../assets/Home/Home2.png"
import Home3 from "../../assets/Home/Home3.png"
import Home4 from "../../assets/Home/Home4.png"


const images = [
  
  {id: 1,
  img: Home1,
  title: "Get Your Part Started",
  description: `Discover premium party essentials from elegant themes to playful accessories all in 
  one place`},
  
  {id: 2,
  img: Home2,
  title: "Helium Balloons Collection",
  description: "View our Collection of Ready Made & Individual Gas Balloons options available"},

  {id: 3,
  img: Home3,
  title: "Great Parties Even Greater Gifts",
  description: "Make Every event unforgettable with curated gifts that match the joy of your celebration "},

  {id: 4,
  img: Home4,
  title: "High Quality Sound Systems are available ",
  description: "Powerful audio for unforgettable celebrations"},

];

function Hero() {
  return (
    <section className="  md:h-auto md:mt-[-16px] md:ml-[-16px] 2xl:ml-[-31px] ml-[-16px] top-[-5] sm:h-[45vh] w-screen lg:h-[85vh] lh:w-full h-auto mb-4">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        // navigation={true}
        effect={"fade"}
        fadeEffect={{crossFade: true}}
        modules={[Autoplay, EffectFade]}
        className="w-full h-full "
        
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative ">
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="md:w-full md:h-full w-screen h-auto object-cover   "
              />
              {/* Text overlay inside slide */}
              <div className="absolute top-2/5 left-1/5  -translate-x-1/2 -translate-y-1/2 text-white text-center md:mt-10 px-4 ml-9 md:w-[400px] lg:w-[600px] w-[280px] mt-4">
                <h2 className="mt-6 text-[13px] md:text-2xl  lg:text-5xl font-bold lg:ml-10 lg:mb-10 md:ml-10 lg:mt-15">{item.title}</h2>
                <p className="mt-4 ml-6  text-[10px] sm:text-[11px] md:text-[14px] lg:text-[17px] md:ml-10 lg:ml-10 drop-shadow-md ">{item.description}</p>
                <button className="bg-red-800 text-[6px]  md:text-[10px] md:mt-12 md:px-5 md:py-2 lg:px-8 lg:text-[17px] font-medium text-white px-2 md:mr-[-8px] mt-4  py-1 rounded-full hover:bg-orange-600 font-small ">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;

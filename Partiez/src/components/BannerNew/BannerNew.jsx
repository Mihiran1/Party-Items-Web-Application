import React from 'react';
import Home1 from "../../assets/Home/Banner3.png"
import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";


function BannerNew() {
  return (
    
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 item-center mt-15'>
          <div className=''>
            <img src={Home1} alt="Book img" className='max-w-[640px] h-[390px] p-4 w-full mx-auto  object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl'/>
          </div>

          {/* text content section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 mt-[-10]">
            <h1 className="text-3xl sm:text-4xl font-bold">
                Library at your fingertips
            </h1>
            <p className='text-sm text-gray-500 tracking-wider leading-5'>
              Access a world of books anytime, anywhere. Browse, read, and enjoy your favorite titles with just a click your personal library is always within reach.
            </p>

            <div className='flex flex-col gap-5'>
              <div className="flex items-center gap-4">
                <FaBookOpen className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Pro</p>
              </div>
              <div className="flex items-center gap-4">
                <GrDeliver className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers </p>
              </div>
            </div>
          </div>
        </div>        
      </div>
  )
}

export default BannerNew
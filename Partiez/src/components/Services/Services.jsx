import React from "react";
import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment, MdLocalOffer } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

function Services() {
  const services = [
    { icon: <FaBookOpen className="text-white" />, label: "Quality Products", bg: "bg-violet-500" },
    { icon: <GrDeliver className="text-white" />, label: "Fast Delivery", bg: "bg-orange-500" },
    { icon: <MdOutlinePayment className="text-white" />, label: "Easy Payment method", bg: "bg-green-500" },
    { icon: <MdLocalOffer className="text-white" />, label: "Get Offers on Products", bg: "bg-yellow-500" },
    { icon: <MdLocalOffer className="text-white" />, label: "More Offers", bg: "bg-pink-500" },
  ];

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <hr className="border-1 border-gray-300 " />


      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 my-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`md:h-20 md:w-20 w-15 h-15 text-[32px] rounded-full  shadow-md flex items-center justify-center ${service.bg} transform transition-transform duration-300 hover:scale-110 hover:rotate-10`}
              >
                {service.icon}
              </div>
              <p className="mt-2 text-[12px] sm:text-sm font-medium text-gray-700">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

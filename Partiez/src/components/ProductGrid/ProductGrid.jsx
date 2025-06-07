import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ title, description, products }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 5);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    // Navigate to add to cart page with product details
    navigate(`/add-to-cart/${product.id}`, { state: { product } });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="md:text-2xl text-xl sm:text-2xl font-bold text-gray-800 sm:mt-8 mb-5">{title}</h2>
        <p className="mt-2 md:text-sm text-[12px] sm:text-[14px] text-gray-600 max-w-2xl mx-auto mb-0 sm:mb-14">{description}</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm p-2 hover:shadow-md transition group text-center cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[90px] sm:h-[140px] md:h-[150px] lg:h-[180px] xl:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-normal text-[12px] sm:text-[13px] text-gray-800">{product.title}</h3>
            <div className="text-yellow-500 flex justify-center items-center gap-1 text-[12px] mt-1">
              <FaStar /> 5.0
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-[12px] sm:text-sm mt-5"
        >
          {showAll ? "Show Less" : "View All Products"}
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;
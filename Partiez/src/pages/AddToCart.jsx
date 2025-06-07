import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaShareAlt, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../components/CartContext/CartContext"; // Import the cart context hook

const AddToCart = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  
  // Get addToCart function from cart context
  const { addToCart } = useCart();
  
  // Animation effect when component mounts
  useEffect(() => {
    // Reset AOS animations when component mounts
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);
  
  // Sample available colors and sizes (you would replace these with actual product data)
  const availableColors = ["Red", "Blue", "Black", "White"];
  const availableSizes = ["S", "M", "L", "XL"];
  
  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Handle add to cart action
  const handleAddToCart = () => {
    // Add validation if needed (e.g., require color/size selection)
    if (!product.id) {
      // Generate a unique ID if product doesn't have one
      product.id = Date.now().toString();
    }
    
    // Add item to cart using the context function
    addToCart(product, quantity, selectedColor, selectedSize);
    
    // Show feedback to user
    alert(`Added ${quantity} ${product.title} to cart!`);
    // You could use a toast notification instead of alert for better UX
  };
  
  // Handle buy now action
  const handleBuyNow = () => {
    // First add to cart
    if (!product.id) {
      product.id = Date.now().toString();
    }
    addToCart(product, quantity, selectedColor, selectedSize);
    
    // Then navigate to checkout
    navigate("/checkout", { 
      state: { 
        items: [{ ...product, quantity, color: selectedColor, size: selectedSize }] 
      } 
    });
  };
  
  // Go back function
  const goBack = () => {
    navigate(-1);
  };
  
  // If no product was passed through navigation state, handle the error
  if (!product) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <p className="mt-4 text-gray-600">Sorry, the product you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate("/home")}
          className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Return to Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Back button */}
      <button 
        onClick={goBack}
        className="flex items-center text-gray-600 hover:text-orange-500 mb-4 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
        {/* Product Images Section */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden h-72 sm:h-96 md:h-[450px] flex items-center justify-center shadow-sm">
            <img 
              src={product.img} 
              alt={product.title} 
              className="w-full h-full object-contain p-4"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {/* Thumbnail images would go here */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden h-20 cursor-pointer shadow-sm">
                <img 
                  src={product.img} 
                  alt={`${product.title} view ${index + 1}`} 
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details Section */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{product.title}</h1>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-red-500 transition">
                <FaHeart />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500 transition">
                <FaShareAlt />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-sm text-gray-600">(245 reviews)</span>
          </div>
          
          <div className="text-2xl font-bold text-gray-800">
            Rs.{(product.price || 1000).toFixed(2)}
            <span className="ml-2 text-sm line-through text-gray-500">Rs.{((product.price || 1000) * 1.2).toFixed(2)}</span>
            <span className="ml-2 text-sm text-green-600">20% off</span>
          </div>
          
          <div className="border-t border-b py-4 my-2">
            <p className="text-gray-700 text-sm md:text-base">
              {product.description || "This premium product is designed with quality materials and attention to detail. Perfect for any occasion and guaranteed to impress. Ideal for birthdays, parties, and special events."}
            </p>
          </div>
          
          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
            <div className="flex space-x-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-orange-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  aria-label={color}
                ></button>
              ))}
            </div>
            {selectedColor && <p className="text-xs text-gray-600 mt-1">Selected: {selectedColor}</p>}
          </div>
          
          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
            <div className="flex space-x-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-md flex items-center justify-center border ${
                    selectedSize === size 
                      ? "border-orange-500 bg-orange-50 text-orange-500" 
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button 
                onClick={decreaseQuantity}
                className="px-3 py-2 text-gray-600 hover:text-red-500"
              >
                <FaMinus size={12} />
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="px-3 py-2 text-gray-600 hover:text-green-500"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-orange-100 text-orange-500 px-4 py-3 rounded-md hover:bg-orange-200 transition flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Buy Now
            </button>
          </div>
          
          {/* Additional Information */}
          <div className="pt-4 text-sm text-gray-600">
            <p>✓ Free delivery on orders over Rs.5000</p>
            <p>✓ 30-day return policy</p>
            <p>✓ Secure checkout</p>
          </div>
        </div>
      </div>
      
      {/* Product Description Section */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Product Description</h2>
        <div className="prose max-w-none">
          <p>
            {product.longDescription || `This ${product.title} is perfect for any celebration. Made with high-quality materials and designed to make your special occasion even more memorable.`}
          </p>
          <ul className="mt-4">
            <li>Premium quality materials</li>
            <li>Elegant design</li>
            <li>Perfect for parties and celebrations</li>
            <li>Easy to set up and use</li>
            <li>Environmentally friendly</li>
          </ul>
        </div>
      </div>
      
      {/* You may also like section - can be added later */}
    </div>
  );
};

export default AddToCart;
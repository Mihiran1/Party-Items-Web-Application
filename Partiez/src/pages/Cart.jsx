import React from "react";
import { useCart } from "../components/CartContext/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-6">Your cart is empty.</p>
          <Link 
            to="/" 
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    // Here you would implement checkout logic
    navigate("/checkout", { state: { items: cartItems } });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 text-sm font-medium text-gray-700 p-4 border-b">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>
            
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className="grid grid-cols-12 p-4 border-b items-center">
                {/* Product info */}
                <div className="col-span-12 md:col-span-6 flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    {item.color && <p className="text-xs text-gray-600">Color: {item.color}</p>}
                    {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                    <button 
                      onClick={() => removeFromCart(item.id, item.color, item.size)}
                      className="text-xs text-red-500 flex items-center mt-2 md:hidden"
                    >
                      <FaTrash size={10} className="mr-1" /> Remove
                    </button>
                  </div>
                </div>
                
                {/* Price */}
                <div className="col-span-4 md:col-span-2 text-center mt-2 md:mt-0">
                  <p className="md:hidden text-xs text-gray-500">Price:</p>
                  <p>Rs{(item.price || 1000.00).toFixed(2)}</p>
                </div>
                
                {/* Quantity */}
                <div className="col-span-4 md:col-span-2 flex justify-center items-center mt-2 md:mt-0">
                  <p className="md:hidden text-xs text-gray-500 mr-2">Quantity:</p>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.color, item.size)}
                      className="px-2 py-1 text-gray-600 hover:text-red-500"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.color, item.size)}
                      className="px-2 py-1 text-gray-600 hover:text-green-500"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
                
                {/* Total */}
                <div className="col-span-3 md:col-span-2 text-center mt-2 md:mt-0">
                  <p className="md:hidden text-xs text-gray-500">Total:</p>
                  <p className="font-medium">Rs.{((item.price || 1000.00) * item.quantity).toFixed(2)}</p>
                </div>
                
                {/* Remove button - visible only on larger screens */}
                <div className="col-span-1 hidden md:flex justify-center">
                  <button 
                    onClick={() => removeFromCart(item.id, item.color, item.size)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Continue shopping and Clear cart buttons */}
          <div className="flex justify-between mt-4">
            <Link 
              to="/" 
              className="text-orange-500 hover:text-orange-600 flex items-center"
            >
              ← Continue Shopping
            </Link>
            <button 
              onClick={() => clearCart()}
              className="text-red-500 hover:text-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-2 border-b pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs.{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Rs 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">Rs.{(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total</span>
              <span>Rs. {(getTotalPrice() * 1.1).toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-md mt-6 hover:bg-orange-600 transition"
            >
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-xs text-gray-600">
              <p>✓ Secure Checkout</p>
              <p>✓ 30-day Return Policy</p>
              <p>✓ 24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
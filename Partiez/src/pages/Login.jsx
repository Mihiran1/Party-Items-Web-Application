import React from 'react';
import login from '../assets/Home/Login.jpg';
import Google from '../assets/Home/google.jpg';
import FB from '../assets/Home/fb.jpg';
import Apple from '../assets/Home/app.jpg';
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-4xl md:h-[60vh] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          
          {/* Image - 3/5 */}
          <div className="md:col-span-3 hidden md:block">
            <img
              src={login}
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - 2/5 */}
          <div className="md:col-span-2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
            <h3 className='text-[13px] mx-6  mb-7 text-center'>Welcome back! Access your party essentials in one click.</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
              />
              <p className='text-[12px] text-blue-400 mt-[-5px] mb-6 cursor-pointer'>Forgot Password</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                Login
              </button>
              <Link to="/signup">
                <p className='text-[12px] text-blue-400 mt-[-5px] mb-3 cursor-pointer'>Have an account? Signup</p>
              </Link>
            </form>
            <div className='flex gap-2 items-center justify-center '>
              <img src={Google} alt="" className='w-6 h-6 sm:w-8 sm:h-8 cursor-pointer '/>
              <img src={FB} alt="" className='w-4 h-4 sm:w-5.5 sm:h-5.5 cursor-pointer'/>
              <img src={Apple} alt="" className='w-7 h-8 sm:w-9 sm:h-10.5 cursor-pointer '/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;

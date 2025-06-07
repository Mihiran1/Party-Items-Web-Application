import React from 'react';
import {  Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from "./pages/Cart"; 
import { CartProvider } from "./components/CartContext/CartContext";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Birthday from './pages/Birthday';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import AddToCart from './pages/AddToCart';


// Component to wrap conditional Navbar logic
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login' ,'/signup']; // Add more if needed
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!hideNavbar && <Navbar />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
      <>
      <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-to-cart/:productId" element={<AddToCart />} />
          <Route path="/cart" element={<Cart />} /> {/* Add a Cart route */} 
        </Routes>
      </Layout>
      
      <Footer/>
      </CartProvider>
      </>
   
  );
}

export default App;

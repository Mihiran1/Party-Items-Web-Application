import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 md:px-12 mt-10 py-15  w-screen absolute    2xl:ml-[-15px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Logo + Description */}
        <div>
          <h2 className="md:text-xl text-md font-bold mb-4">PartyPalace</h2>
          <p className="md:text-sm text-[12px]">
            Your one-stop shop for party decorations and supplies. Let’s make every celebration unforgettable!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="md:text-lg text-md font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 md:text-sm text-[12px]">
            <li className="hover:translate-x-1 transition-transform duration-200"><a href="#">Home</a></li>
            <li className="hover:translate-x-1 transition-transform duration-200"><a href="#">Products</a></li>
            <li className="hover:translate-x-1 transition-transform duration-200"><a href="#">About Us</a></li>
            <li className="hover:translate-x-1 transition-transform duration-200"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="md:text-lg text-md font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 md:text-sm text-[12px]">
            <li className="flex items-center gap-2"><MdLocationOn /> Colombo, Sri Lanka</li>
            <li className="flex items-center gap-2"><MdPhone /> +94 77 123 4567</li>
            <li className="flex items-center gap-2"><MdEmail /> info@partypalace.lk</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="md:text-lg text:md font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300 bg-gray-700 p-2 rounded-full"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-8" />

      <div className="text-center md:text-sm text-[12px] text-gray-500">
        © {new Date().getFullYear()} PartyPalace. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

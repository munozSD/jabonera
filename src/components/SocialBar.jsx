import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-400 text-white z-50 shadow-md">
      <div className="max-w-[2000px] mx-auto flex justify-between items-center px-6 py-2">
        <span className="text-sm md:text-base font-medium">
          ✨✅➡️💧 “Productos efectivos, precios justos y promociones que brillan”
        </span>
        <div className="flex space-x-4">
          <a href="https://wa.me/524682393765" target="_blank" rel="noreferrer" className="hover:text-green-400">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/tu_pagina" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

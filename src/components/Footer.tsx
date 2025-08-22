// src/components/layout/Footer.tsx
"use client";
import Image from "next/image";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Logo e introducción */}
        <div>
          <Image
            src="/logo.svg"
            alt="La Jabonera Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-sm">
            Productos de limpieza de calidad profesional, pensados para el hogar y negocio. 
            Envíos rápidos y precios justos.
          </p>
        </div>

        {/* Información de contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} /> (468) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={16} /> contacto@lajabonera.com
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon size={16} /> Av. Principal #123, Centro, MX
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#productos" className="hover:underline">Nuestros productos</a></li>
            <li><a href="#sobre-nosotros" className="hover:underline">Sobre nosotros</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-xs mt-8 border-t border-green-700 pt-4">
        © {new Date().getFullYear()} La Jabonera. Todos los derechos reservados.
      </div>
    </footer>
  );
}

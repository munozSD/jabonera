// src/components/layout/FooterCard.tsx
"use client";
import Image from "next/image";

export default function FooterCard() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8 grid md:grid-cols-3 gap-8">
          
          {/* Logo e introducción */}
          <div>
            <Image
              src="/logo.svg"
              alt="La Jabonera Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-gray-700 text-sm">
              Productos de limpieza de calidad profesional, pensados para hogar y negocio. Envíos rápidos y precios justos.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-3">Contacto</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
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
            <h4 className="font-semibold text-gray-900 text-lg mb-3">Enlaces</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#productos" className="hover:underline">Productos</a></li>
              <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} La Jabonera. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

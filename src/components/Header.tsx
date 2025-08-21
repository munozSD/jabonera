'use client';

import Link from 'next/link';
import Image from 'next/image'; // 🔹 Importa Image si lo vas a usar

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 bg-blue-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-1' lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logoJabonera.svg" alt="La Jabonera" className="w-36 h-36 bg-white" />
            <span className="font-extrabold text-5xl tracking-tight text-white">
              La Jabonera
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-2xl">
            <Link href="#productos" className="hover:text-slate-900">
              Productos
            </Link>
            <Link href="#nosotros" className="hover:text-slate-900">
              Nosotros
            </Link>
            <Link href="#contacto" className="hover:text-slate-900">
              Contacto
            </Link>
            <Link href="#contacto" className="hover:text-slate-900">
              Catalogo
            </Link>
          </nav>

          <Link
            href="#contacto"
            className="inline-flex items-center rounded-xl border px-7 py-2 text-2xl font-semibold hover:bg-red-900 hover:text-white transition"
          >
            Cotizar ahora
          </Link>
        </div>
      </div>
    </header>
  );
}

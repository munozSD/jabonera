'use client';

// import { LogoMark } from './icons'; // Asumiendo que tienes un archivo para íconos
import Link from 'next/link';
import { ShieldIcon, TruckIcon, LeafIcon } from '@/components/icons';
export default function Home() {
  return (
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-sky-700 to-emerald-600"
        >        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Limpieza profesional a precios justos
            </h1>
            <p className="mt-4 text-lg text-white">
              En <strong>La Jabonera</strong> te ofrecemos detergentes, desinfectantes y soluciones para hogar y negocio. Calidad garantizada con entregas locales rápidas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#productos"
                className="rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:opacity-95"
              >
                Ver catálogo
              </a>
              <a
                href="#contacto"
                className="rounded-2xl border border-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-900 hover:text-white"
              >
                Solicitar cotización
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-5 h-5" /> Calidad comprobada
              </div>
              <div className="flex items-center gap-2">
                <TruckIcon className="w-5 h-5" /> Entrega local
              </div>
              <div className="flex items-center gap-2">
                <LeafIcon className="w-5 h-5" /> Opciones biodegradables
              </div>
            </div>
          </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/productos.webp"
                  alt="La Jabonera"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

        </div>
      </section>
  );
}
"use client";

import React, { useMemo, useState } from "react";
import { ShieldIcon } from '@/components/icons';

// ------------------------------------------------------------
// La Jabonera — Página única (Next.js App Router)
// Coloca este archivo como: src/app/page.tsx
// Requiere Tailwind CSS ya configurado (globals.css + postcss.config.js)
// ------------------------------------------------------------

export const metadata = {
  title: "La Jabonera | Productos de limpieza",
  description:
    "La Jabonera: venta de productos de limpieza para hogar y negocio. Calidad profesional, precios justos y envíos locales.",
  keywords: [
    "La Jabonera",
    "productos de limpieza",
    "jabón",
    "detergentes",
    "desinfectantes",
    "proveedor de limpieza",
  ],
  openGraph: {
    title: "La Jabonera | Productos de limpieza",
    description:
      "Venta de productos de limpieza para hogar y negocio. Calidad profesional.",
    type: "website",
    url: "https://lajabonera.example/",
  },
};

// Tipos
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // MXN
  measure: string; // p. ej. 1L, 900ml, 5kg
  tags: string[];
  featured?: boolean;
};

const MXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const PRODUCTS: Product[] = [
  {
    id: "d-liquido",
    name: "Detergente Líquido Multiusos",
    description:
      "Remueve grasa y suciedad difícil. Ideal para pisos, azulejos y superficies lavables.",
    price: 85,
    measure: "1L",
    tags: ["multiusos", "hogar"],
    featured: true,
  },
  {
    id: "cloro",
    name: "Cloro Desinfectante",
    description:
      "Desinfección profunda con acción antibacterial. Uso doméstico y comercial.",
    price: 39,
    measure: "1L",
    tags: ["desinfección", "antibacterial"],
  },
  {
    id: "suavizante",
    name: "Suavizante de Telas",
    description:
      "Aroma fresco de larga duración. Deja tu ropa suave y sin enredos.",
    price: 59,
    measure: "900ml",
    tags: ["ropa", "aroma"],
    featured: true,
  },
  {
    id: "desengrasante",
    name: "Desengrasante Industrial",
    description:
      "Fórmula concentrada para cocinas, talleres y restaurantes.",
    price: 120,
    measure: "1L",
    tags: ["industrial", "cocina"],
  },
  {
    id: "jabonz",
    name: "Jabón Z de Barra",
    description:
      "Clásico para ropa y uso general. Cuida colores y blancos.",
    price: 18,
    measure: "200g",
    tags: ["ropa", "económico"],
  },
  {
    id: "limpiavidrios",
    name: "Limpiavidrios Anti-Empañante",
    description:
      "Brillo sin marcas en vidrios y espejos. Secado rápido.",
    price: 45,
    measure: "750ml",
    tags: ["vidrios", "acabado"],
  },
];

const TAGS = Array.from(
  new Set(PRODUCTS.flatMap((p) => p.tags))
).sort((a, b) => a.localeCompare(b, "es"));

export default function LaJaboneraPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchText =
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower);
      const matchTag = !activeTag || p.tags.includes(activeTag);
      return matchText && matchTag;
    });
  }, [query, activeTag]);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // Aquí podrías llamar a tu API en /api/contact (Next.js Route Handler)
    console.log("Contacto enviado", data);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      {/* Hero */}


      {/* Buscador + Filtros */}

        {/* Grid de productos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="aspect-[4/3] bg-slate-100 grid place-items-center">
                <span className="text-slate-400 text-sm">Imagen {p.name}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-lg leading-tight">
                    {p.name}
                  </h3>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs">
                      <StarIcon className="w-4 h-4" /> Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold">
                    {MXN.format(p.price)} <span className="text-xs font-normal text-slate-500">/{p.measure}</span>
                  </div>
                  <a
                    href="#contacto"
                    className="rounded-xl border border-slate-900 px-3 py-2 text-sm font-semibold hover:bg-slate-900 hover:text-white"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Beneficios */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Benefit icon={<ShieldIcon className="w-6 h-6" />} title="Calidad profesional" desc="Fórmulas efectivas probadas en uso doméstico y comercial." />
          <Benefit icon={<LeafIcon className="w-6 h-6" />} title="Opciones eco" desc="Productos biodegradables y rellenos a granel para reducir plástico." />
          <Benefit icon={<TruckIcon className="w-6 h-6" />} title="Envío local" desc="Cobertura en la zona con entregas el mismo día en pedidos antes de las 12:00." />
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="bg-white/70 border-y border-slate-200 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">¿Quiénes somos?</h2>
            <p className="mt-3 text-slate-600">
              Somos <strong>La Jabonera</strong>, un negocio local dedicado a ofrecer soluciones de limpieza confiables para hogares, oficinas y comercios. Creemos en la atención cercana, precios justos y productos que realmente funcionan.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>Atención a empresas y mayoreo.</li>
              <li>Rellenos a granel para ahorrar y cuidar el medio ambiente.</li>
              <li>Asesoría para elegir el producto ideal según tu necesidad.</li>
            </ul>
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-emerald-50 to-sky-50 border border-slate-200 p-4 shadow-sm">
            <div className="grid h-full place-items-center rounded-2xl border border-dashed border-slate-300">
              <span className="text-slate-500 text-sm">(Agrega aquí una foto del local o del equipo)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios simples */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Clientes contentos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial name="Marta R." text="El desengrasante me salvó la cocina del negocio. Súper recomendado." />
          <Testimonial name="Eduardo P." text="Excelente servicio y los precios muy competitivos. Me encantó el suavizante." />
          <Testimonial name="Ana L." text="Puntuales con la entrega y la calidad es constante. Volveré a comprar." />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/70 border-y border-slate-200 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Faq q="¿Hacen envíos?" a="Sí, contamos con entrega local. Envíanos tu ubicación para calcular costos y tiempos." />
            <Faq q="¿Venden a mayoreo?" a="Sí, ofrecemos precios especiales para compras por volumen. Solicita una cotización." />
            <Faq q="¿Puedo llevar mis envases?" a="Claro, fomentamos los rellenos a granel. Pregunta por las opciones disponibles." />
            <Faq q="¿Métodos de pago?" a="Efectivo, transferencia y tarjeta (según disponibilidad)." />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Solicita tu cotización</h2>
            <p className="mt-2 text-slate-600">
              Cuéntanos qué productos necesitas y a dónde te los enviamos.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-3"><PhoneIcon className="w-5 h-5 mt-0.5" /> <span>WhatsApp: <a href="https://wa.me/521000000000" className="underline">+52 1 000 000 0000</a></span></li>
              <li className="flex items-start gap-3"><MailIcon className="w-5 h-5 mt-0.5" /> <span>Correo: <a href="mailto:ventas@lajabonera.mx" className="underline">ventas@lajabonera.mx</a></span></li>
              <li className="flex items-start gap-3"><MapPinIcon className="w-5 h-5 mt-0.5" /> <span>Zona de cobertura: local y alrededores (pregunta disponibilidad)</span></li>
            </ul>
          </div>
          <form onSubmit={handleContactSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold">Nombre</label>
                <input name="nombre" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Teléfono</label>
                  <input type="tel" name="telefono" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold">Productos de interés</label>
                <textarea name="mensaje" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Ej. 10L de detergente multiusos, 5L de cloro, 3 suavizantes..." />
              </div>
              <button type="submit" className="rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:opacity-95">
                Enviar solicitud
              </button>
              {sent && (
                <p className="text-sm text-emerald-700">
                  ¡Gracias! Tu solicitud fue registrada. Te contactaremos a la brevedad.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <LogoMark className="w-5 h-5" />
            <span>
              © {new Date().getFullYear()} La Jabonera — Todos los derechos reservados
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-600">
            <a href="#productos" className="hover:text-slate-900">Catálogo</a>
            <a href="#nosotros" className="hover:text-slate-900">Nosotros</a>
            <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl border border-slate-200 p-2">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-slate-700">“{text}”</p>
      <div className="mt-4 text-sm font-semibold text-slate-900">{name}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="font-semibold">{q}</span>
        <span className="ml-2 text-slate-500">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-slate-600">{a}</p>}
    </div>
  );
}

// --------------------------- Icons ----------------------------

function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="bubbles" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#bubbles)" opacity="0.15" />
      <path
        d="M8.5 10.5a3 3 0 1 1 5.8-.9m-7.8 5.3c1.2 1.5 3.1 2.6 5.5 2.6 3.9 0 7-2.5 7-6 0-1.7-.8-3.2-2.1-4.3"
        stroke="#0f172a"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7" r="2" fill="#0ea5e9" opacity={0.9} />
      <circle cx="9" cy="6" r="1.2" fill="#10b981" opacity={0.9} />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3l6 2v6c0 5-3.2 8.5-6 9-2.8-.5-6-4-6-9V5l6-2z"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 7h11v7H3zM14 9h3l3 3v2h-6z" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      <circle cx="16" cy="18" r="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}

function LeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 14c7 0 12-6 16-10 0 9-5 16-12 16-2.5 0-4-1.5-4-3 0-1 .5-2 1-3z" fill="none" stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6 2h4l2 5-3 2a14 14 0 006 6l2-3 5 2v4c0 1-1 2-2 2A18 18 0 013 8c0-1 1-2 2-2z" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 6h18v12H3z" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      <path d="M3 7l9 7 9-7" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 21s6-6 6-10a6 6 0 10-12 0c0 4 6 10 6 10z" fill="none" stroke="#0f172a" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="2.5" fill="none" stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16l-4.9 2.2.9-5.5-4-3.9 5.5-.8L12 3z" fill="none" stroke="#0f172a" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

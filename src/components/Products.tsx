'use client'; // Necesario para usar hooks

import { useState } from 'react';

// Define o importa tus TAGS (ejemplo)
const TAGS = ['multiusos', 'hogar', 'desinfección', 'antibacterial', 'ropa', 'aroma'];

export default function Products() {
  // Declara los estados necesarios
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Productos destacados</h2>
          <p className="mt-2 text-slate-600">
            Encuentra lo que necesitas para mantener impecable tu espacio.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar (ej. desengrasante, ropa, vidrios)"
            className="w-full sm:w-80 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <div className="flex gap-2 overflow-auto">
            <button
              onClick={() => setActiveTag(null)}
              className={`whitespace-nowrap rounded-2xl px-4 py-2 text-sm border ${
                !activeTag
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-300 hover:border-slate-400"
              }`}
              aria-pressed={!activeTag}
            >
              Todos
            </button>
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
                className={`whitespace-nowrap rounded-2xl px-4 py-2 text-sm border ${
                  activeTag === t
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-300 hover:border-slate-400"
                }`}
                aria-pressed={activeTag === t}
              >
                #{t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
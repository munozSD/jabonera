import React from 'react';

// Exporta todos los iconos
export const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    {/* ... código del icono ... */}
  </svg>
);

// Exporta otros componentes UI
export const Benefit = ({ icon, title, desc }: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string 
}) => (
    <div className="rounded-3xl border p-4">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
);

// Exporta los demás componentes (Testimonial, Faq, etc.) de la misma forma
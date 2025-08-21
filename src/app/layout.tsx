// src/app/layout.tsx (Server Component)
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "La Jabonera | Productos de limpieza",
  description: "Venta de productos de limpieza profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
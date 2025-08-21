export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  measure: string;
  tags: string[];
  featured?: boolean;
};

export const MXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export const PRODUCTS: Product[] = [
  {
    id: "d-liquido",
    name: "Detergente Líquido Multiusos",
    description: "Remueve grasa y suciedad difícil. Ideal para pisos, azulejos y superficies lavables.",
    price: 85,
    measure: "1L",
    tags: ["multiusos", "hogar"],
    featured: true,
  },
  // ... más productos
];

export const TAGS = Array.from(
  new Set(PRODUCTS.flatMap((p) => p.tags))
).sort((a, b) => a.localeCompare(b, "es"));
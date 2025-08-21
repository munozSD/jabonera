"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="La Jabonera Logo"
        width={50}
        height={50}
        priority
      />
      <span className="text-2xl font-bold text-green-700">
        La Jabonera
      </span>
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'));
const Home = dynamic(() => import('@/components/Home'));
const SocialBar = dynamic(() => import('@/components/SocialBar'));
const Products = dynamic(() => import('@/components/Products'));

export default function Page() {
  return (
    <div className="min-h-screen">
      <SocialBar />

      <div className="mt-10">
        <Header />
      </div>

      <main>
        <Home />
        <Products />
      </main>
    </div>
  );
}

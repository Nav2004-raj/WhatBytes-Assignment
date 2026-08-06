"use client";

import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { CartProvider } from "@/context/cart-context";
import { Header } from "@/components/layout";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";

interface ProductPageParams {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageParams) {
  const product = products.find((item) => item.id === params.id);
  const searchParams = useSearchParams();

  if (!product) {
    notFound();
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header searchValue={searchParams.get("q") ?? ""} onSearch={() => {}} />
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-900/30">
            <ProductDetail product={product} />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

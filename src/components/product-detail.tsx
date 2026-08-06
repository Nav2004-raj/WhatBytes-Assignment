import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/cart-context";

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-4 shadow-xl shadow-slate-900/30">
        <img
          src={product.image}
          alt={product.title}
          className="h-[520px] w-full rounded-[1.5rem] object-cover"
        />
      </div>

      <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-900/30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">
              {product.title}
            </h1>
          </div>
          <p className="text-3xl font-semibold text-sky-400">
            ${product.price}
          </p>
        </div>
        <p className="text-slate-400">{product.description}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
            <p className="text-sm text-slate-500">Brand</p>
            <p className="text-lg font-semibold text-slate-100">
              {product.brand}
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
            <p className="text-sm text-slate-500">Category</p>
            <p className="text-lg font-semibold text-slate-100">
              {product.category}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-slate-700"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[2rem] text-center text-lg font-semibold text-slate-100">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((value) => value + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-slate-700"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-slate-500">Quantity</p>
          </div>
          <button
            onClick={() => addToCart(product, quantity)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-sky-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

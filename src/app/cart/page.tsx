"use client";

import Link from "next/link";
import { CartProvider, useCart } from "@/context/cart-context";
import { CartItemRow } from "@/components/cart-item";
import { Header } from "@/components/layout";
import { Footer } from "@/components/footer";

function CartContent() {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-900/30">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-100">Your Cart</h1>
            <p className="mt-2 text-sm text-slate-400">
              Manage items before checkout.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="inline-flex items-center justify-center rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
          >
            Clear Cart
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-slate-900 p-8 text-center text-slate-400">
            Your cart is empty. Explore products and add something great.
            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Back to store
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 text-slate-100">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Summary
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-slate-100">
                    Total: ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <button className="inline-flex rounded-3xl bg-sky-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header searchValue="" onSearch={() => {}} />
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <CartContent />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

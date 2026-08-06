import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "@/context/cart-context";
import { useCart } from "@/context/cart-context";

export function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 sm:grid-cols-[120px_minmax(0,1fr)_auto]">
      <img
        src={item.image}
        alt={item.title}
        className="h-28 w-full rounded-3xl object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
        <p className="text-sm text-slate-400">{item.brand}</p>
        <p className="text-sm text-slate-400">{item.category}</p>
        <p className="text-sm font-semibold text-sky-400">${item.price}</p>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 sm:items-end">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-2 py-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-slate-700"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-[2rem] text-center text-sm font-semibold text-slate-100">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 transition hover:bg-slate-700"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
        >
          <Trash2 className="h-4 w-4" />
          Remove
        </button>
      </div>
    </div>
  );
}

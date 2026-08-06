import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)]">
      <Link
        href={`/product/${product.id}`}
        className="block bg-white px-4 pt-5"
      >
        <div className="flex h-44 items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      <div className="mt-auto flex flex-1 flex-col px-4 pb-4 pt-3">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-base font-bold text-slate-900">{product.title}</h3>
          <p className="mt-1 text-base text-slate-900">${product.price}</p>
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-4 w-full rounded-lg bg-[#05529C] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#04467f]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function FeaturedProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)] sm:col-span-2 sm:flex-row">
      <Link
        href={`/product/${product.id}`}
        className="flex items-center justify-center bg-white p-6 sm:w-[45%]"
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-72 w-full object-contain"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between p-6 sm:pr-7">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
            <p className="mt-2 text-xl font-bold text-slate-900">
              ${product.price}
            </p>
          </Link>
          <div className="mt-3 flex items-center gap-1 text-[#05529C]">
            <span aria-hidden>★★★★☆</span>
            <span className="ml-1 text-sm text-slate-500">4.5</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {product.description}
          </p>
          <div className="mt-4 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Category</span>{" "}
            <span className="ml-1">{product.category}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-6 w-full rounded-lg bg-[#05529C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#04467f] sm:max-w-xs sm:self-end"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ShoppingCart, Search, UserCircle } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function Header({
  searchValue,
  onSearch,
}: {
  searchValue: string;
  onSearch: (value: string) => void;
}) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-30 w-full bg-sky-900 shadow-xl shadow-sky-950/20">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 text-white sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-14 items-center justify-center rounded-3xl bg-white px-4 font-bold text-sky-900 shadow-sm">
            Logo
          </div>
        </div>

        <div className="flex-1">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={searchValue}
              onChange={(event) => onSearch(event.target.value)}
              placeholder="Search for products..."
              className="w-full rounded-3xl border border-sky-500/20 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-3xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2">Cart</span>
            {totalItems > 0 ? (
              <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-amber-400 px-1.5 text-xs font-semibold text-slate-900">
                {totalItems}
              </span>
            ) : null}
          </Link>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-sky-900 shadow-sm">
            <UserCircle className="h-7 w-7" />
          </div>
        </div>
      </div>
    </header>
  );
}

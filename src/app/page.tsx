"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { Header } from "@/components/layout";
import { Footer } from "@/components/footer";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import { CartProvider } from "@/context/cart-context";

const categories = ["All", "Electronics", "Clothing", "Home"] as const;

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, selectedCategory, maxPrice]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f3f5f7] text-slate-900">
        <Header searchValue={search} onSearch={setSearch} />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="space-y-5">
              <div className="rounded-2xl bg-[#05529C] p-5 text-white shadow-md">
                <h2 className="text-lg font-semibold">Filters</h2>
                <div className="mt-5">
                  <p className="text-sm font-medium">Category</p>
                  <div className="mt-3 space-y-2.5">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 accent-white"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium">Price</p>
                  <div className="mt-3">
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={maxPrice}
                      onChange={(event) =>
                        setMaxPrice(Number(event.target.value))
                      }
                      className="w-full accent-white"
                    />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>0</span>
                      <span>1000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.08)]">
                <h2 className="text-lg font-semibold text-slate-900">Cacyroy</h2>
                <div className="mt-5">
                  <p className="text-sm font-medium text-slate-800">Category</p>
                  <div className="mt-3 space-y-2.5">
                    {categories.map((category) => (
                      <label
                        key={`cacyroy-${category}`}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 accent-[#05529C]"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium text-slate-800">Price</p>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(Number(event.target.value))
                    }
                    min={0}
                    max={10000}
                    className="mt-3 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#05529C]"
                  />
                </div>
              </div>
            </aside>

            <section>
              <h1 className="mb-5 text-3xl font-bold text-[#05529C]">
                Product Listing
              </h1>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) =>
                  product.id === "8" ? (
                    <FeaturedProductCard key={product.id} product={product} />
                  ) : (
                    <ProductCard key={product.id} product={product} />
                  )
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <p className="mt-8 text-center text-slate-500">
                  No products match your filters.
                </p>
              ) : null}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

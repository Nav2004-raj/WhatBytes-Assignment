import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sky-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Filters
          </p>
          <p className="mt-4 text-sm text-slate-300">
            All · Electronics · Clothing · Home
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            About Us
          </p>
          <p className="mt-4 text-sm text-slate-300">About Us · Contact</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Follow Us
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-white transition hover:bg-sky-600"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-white transition hover:bg-sky-600"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-white transition hover:bg-sky-600"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-sky-800 py-6 text-center text-sm text-slate-300">
        © 2024 American
      </div>
    </footer>
  );
}

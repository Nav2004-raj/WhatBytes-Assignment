# WhatBytes Frontend Developer Internship — Assignment

This repository contains my solution to the frontend assignment provided by WhatBytes for the Frontend Developer Internship.

Please check out here 👇
https://what-bytes-assignment-plum.vercel.app/

## Overview

The app is a small Next.js + TypeScript storefront demonstrating:

- Product listing with cards
- Product detail pages
- A shopping cart with context-based state management
- Shared layout and responsive components
- Clean, feature-based commit history to show development progress

## Features

- Product listing UI with reusable `ProductCard` component
- Product detail page with dynamic route (`/product/[id]`)
- Cart context (`cart-context`) to add/remove items and persist in memory
- Cart page with item list and basic quantity handling
- Responsive layout and footer component

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS for styling

## Project Structure

- `src/app/` — Next.js app entry points and routes
  - `page.tsx` — Home/Product listing
  - `product/[id]/page.tsx` — Product detail route
  - `cart/page.tsx` — Cart page
- `src/components/` — Reusable UI components (product-card, product-detail, cart-item, layout, footer)
- `src/context/` — `cart-context.tsx` provides cart state and actions
- `src/lib/products.ts` — Stub/local product data

## How I worked / Commits

I organized the work into logical, feature-based commits to show the development process. Example commits include:

- `chore: initial Next.js scaffold`
- `feat(product): add product listing and card UI`
- `feat(product): add product detail page`
- `feat(cart): add cart context and UI`
- `refactor(layout): extract shared layout components`

This makes the repo easy to review and demonstrates incremental implementation.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Notes & Next steps

- Persisting cart to localStorage, adding API integration, and improving accessibility are logical next steps.
- If you want me to push this repo to GitHub under a public repo, I can create the remote and push — tell me how you'd like to proceed.

---

If you want any changes to the README (more technical details, screenshots, or a CONTRIBUTING section), tell me what to add and I'll update it.

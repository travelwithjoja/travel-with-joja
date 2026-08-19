# Travel With Joja — Luxury Sri Lanka Travel House

An ultra-premium, bespoke travel platform & administrative booking management portal for **Travel With Joja**, Sri Lanka's premier boutique luxury travel house.

![License](https://img.shields.io/badge/license-MIT-gold.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC.svg)

---

## 🌟 Key Features

### Discerning Public Client Experience
- **Cinematic Hero**: Full-screen luxury destination showcases with smooth background transitions and interactive quick trip tailor form.
- **Bespoke Destination Portfolios**: Rich exploration of 8 iconic regions (Sigiriya, Ella, Galle, Yala, Nuwara Eliya, Kandy, Mirissa, Bentota) with high-res galleries, seasonal advice, and pricing.
- **Curated Travel Packages**: In-depth day-by-day itineraries, villa allocations, inclusions, and instant booking/email inquiry.
- **Real-Time Currency Switcher**: Live conversion across **USD ($)**, **EUR (€)**, **GBP (£)**, and **AUD ($)**.
- **Instant VIP Inquiries & WhatsApp Integration**: Connected to WhatsApp Concierge (`+94710914522`) with pre-filled greeting.
- **Direct Mailto Concierge Links**: All email triggers configured to `travelwithjoja38@gmail.com` with subject `"Sri Lanka Tour Inquiry"` and structured message bodies.
- **Interactive Booking Flow & Printable Voucher**: Step-by-step reservation process with animated celebration, voucher summary, and print functionality.
- **Luxury Reviews & Media Lightbox Gallery**: Verified traveler testimonials and full-screen image inspection.

### Comprehensive Admin Dashboard (`/admin`)
- **Executive Analytics**: Key performance indicators (Total Revenue, Active Bookings, Avg. Order Value, Conversion Rate).
- **Booking Management**: Review, filter by status (Pending, Confirmed, Completed, Cancelled), search by client/booking ref, and export bookings as CSV.
- **Package & Destination CRUD**: Add, edit, toggle visibility, and update pricing/images for all itineraries.
- **Site Configuration**: Edit contact phone, WhatsApp number, email addresses, and branding settings.
- **Confidentiality Lock**: Secure password-protected administrative access with session control.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone your repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The application will be available at `http://localhost:3000` (or `http://localhost:5173`).

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This compiles static assets into the `dist/` folder, ready for deployment to any static hosting provider.

To test the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Options

### 1. GitHub Pages
1. In `vite.config.ts`, if your repository is not at root domain, set the base path:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: './', // Ensures relative assets load properly on GitHub Pages
     // ...
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` directory to your `gh-pages` branch or configure GitHub Actions.

### 2. Vercel / Netlify / Cloudflare Pages
- **Framework Preset**: Vite / React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 🛠️ Project Structure

```
├── public/                 # Static public assets
├── src/
│   ├── components/
│   │   ├── admin/          # Admin Dashboard views & management modules
│   │   ├── common/         # Currency switcher, WhatsApp floating button
│   │   └── public/         # Hero, Navbar, Destinations, Packages, Booking Modal, etc.
│   ├── context/            # AppContext (global state, currency, persistence)
│   ├── data/               # Default destinations, packages, reviews, settings
│   ├── types.ts            # TypeScript interfaces and data models
│   ├── App.tsx             # Main routing and layout container
│   ├── main.tsx            # React application entry point
│   └── index.css           # Tailwind CSS 4 theme and custom styles
├── index.html              # HTML shell
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🔒 Contact & Brand Defaults

- **Brand**: Travel With Joja
- **WhatsApp Concierge**: `+94710914522`
- **Inquiry Email**: `travelwithjoja38@gmail.com`
- **Inquiry Subject**: `Sri Lanka Tour Inquiry`

---

© 2026 Travel With Joja. All Rights Reserved.

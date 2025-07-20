# Sayings of Senpai - Anime Wisdom Ecommerce

A modern, dark anime-themed ecommerce website built with Next.js 14 (App Router) and Tailwind CSS, featuring anime-inspired products and a unique dark techno aesthetic.

## 🌟 Features

### Core Functionality
- **Homepage** with hero banner, looping navigation, featured products, and mobile preview
- **Product Listing** (/shop) with filtering, sorting, and search capabilities
- **Product Detail Pages** (/product/[slug]) with image galleries and detailed information
- **Shopping Cart** (/cart) with full CRUD functionality (add, update, remove items)
- **Cart Drawer** for quick cart access throughout the site

### Design & UX
- **Dark Anime Techno Theme** with glitch effects and anime-inspired visuals
- **Responsive Design** optimized for mobile-first experience
- **Design System** driven by external design.json configuration
- **Glitch Text Effects** and animated elements
- **Japanese Typography** with katakana text overlays
- **Noise Textures** and animated backgrounds

### Technical Features
- **TypeScript** for type safety
- **Context API + useReducer** for cart state management
- **LocalStorage** persistence for cart data
- **Static JSON** product data (easily replaceable with CMS/API)
- **SEO Optimized** with proper metadata and social sharing
- **Accessibility Features** with ARIA labels and keyboard navigation

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer
- **Data**: Static JSON (ready for CMS integration)
- **Image Optimization**: Next.js Image component
- **Build Tool**: Webpack (via Next.js)

## 📁 Project Structure

```
SoS-v2/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── shop/page.tsx           # Product listing
│   ├── product/[slug]/page.tsx # Product details
│   ├── cart/page.tsx           # Shopping cart
│   └── globals.css             # Global styles
├── components/
│   ├── layout/                 # Header, Footer, Navbar
│   ├── ui/                     # Reusable UI components
│   ├── product/                # Product-related components
│   ├── cart/                   # Cart components
│   └── home/                   # Homepage sections
├── contexts/
│   └── CartContext.tsx         # Cart state management
├── hooks/
│   ├── useCart.ts              # Cart operations
│   └── useDesign.ts            # Design system access
├── lib/
│   ├── products.ts             # Product utilities
│   ├── cart-reducer.ts         # Cart reducer logic
│   └── utils.ts                # General utilities
├── data/
│   └── products.json           # Static product data
├── types/
│   └── index.ts                # TypeScript definitions
└── design.json                 # Design system configuration
```

## 🎨 Design System

The entire visual design is driven by the `design.json` file, including:

- **Color Palette**: Dark background with purple, green, and pink accents
- **Typography**: Condensed fonts with glitch effects
- **Animations**: Marquee scrolling, glitch effects, noise textures
- **Layout**: Mobile-first responsive grid system
- **Components**: Consistent spacing and visual hierarchy

## 🛍️ Product Features

### Product Management
- 12 sample products across different categories (apparel, art, lifestyle)
- Product filtering by category and availability
- Multiple sorting options (price, name, featured)
- Product search functionality
- Sale pricing and featured product support

### Shopping Cart
- Add/remove/update quantities
- Persistent cart state (localStorage)
- Real-time cart totals and item counts
- Cart drawer for quick access
- Full cart page with detailed view

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

4. **Type Checking**
   ```bash
   npm run type-check
   ```

## 🎯 Key Components

### Homepage Sections
- **HeroBanner**: Full-screen hero with glitch text and animated elements
- **LoopingNav**: Infinite marquee navigation bar
- **FeaturedProducts**: Showcases featured items with filtering
- **MobilePreview**: Mobile device mockup with catalog preview

### Product Components
- **ProductCard**: Reusable product display with hover effects
- **ProductGrid**: Responsive grid layout for product listings
- **ProductDetails**: Comprehensive product detail view
- **ProductFilters**: Advanced filtering and sorting interface

### Cart Components
- **CartDrawer**: Slide-out cart for quick access
- **CartItem**: Individual cart item with quantity controls
- **CartSummary**: Order totals with shipping and tax calculation

## 🎨 Styling Philosophy

The design follows a "Dark Anime Techno" aesthetic with:
- **High contrast** black backgrounds with neon accent colors
- **Glitch effects** for headings and interactive elements
- **Anime-inspired** visual motifs and Japanese typography
- **Mobile-first** responsive design principles
- **Performance-optimized** animations and interactions

## 🔮 Future Enhancements

This codebase is designed for easy integration with:
- **Headless CMS** (Strapi, Contentful, Sanity)
- **Payment Processing** (Stripe, PayPal)
- **User Authentication** (Auth0, Firebase Auth)
- **Backend APIs** (REST, GraphQL)
- **Analytics** (Google Analytics, PostHog)
- **Search** (Algolia, Elasticsearch)

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers
- Optimized for both desktop and mobile experiences

---

**Built with ❤️ for the anime community** 🎌
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CartProvider } from '@/contexts/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sayings of Senpai - Anime Wisdom & Apparel',
  description: 'Discover wisdom from your favorite anime characters. From philosophical insights to motivational quotes, we bring you the deepest sayings from the world of anime and manga.',
  keywords: ['anime', 'manga', 'quotes', 'apparel', 'wisdom', 'senpai', 'japanese'],
  authors: [{ name: 'Sayings of Senpai' }],
  creator: 'Sayings of Senpai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sayingsofsenpai.com',
    title: 'Sayings of Senpai - Anime Wisdom & Apparel',
    description: 'Discover wisdom from your favorite anime characters.',
    siteName: 'Sayings of Senpai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayings of Senpai - Anime Wisdom & Apparel',
    description: 'Discover wisdom from your favorite anime characters.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description || ''} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
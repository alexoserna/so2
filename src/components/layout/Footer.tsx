import React from 'react';
import Link from 'next/link';
import { GlitchText } from '@/components/ui/GlitchText';

export function Footer() {
  return (
    <footer className="bg-background border-t border-accent-purple/20 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <GlitchText className="text-xl" trigger="hover">
                Sayings of Senpai
              </GlitchText>
            </Link>
            <p className="text-text-gray text-sm leading-relaxed max-w-md">
              Discover wisdom from your favorite anime characters. From philosophical insights to motivational quotes, 
              we bring you the deepest sayings from the world of anime and manga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/shop?category=apparel" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/shop?category=art" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Art Prints
                </Link>
              </li>
              <li>
                <Link href="/shop?category=lifestyle" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-gray text-sm">
            © 2024 Sayings of Senpai. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
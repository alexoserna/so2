'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-8">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-purple relative group',
              isActive 
                ? 'text-accent-purple' 
                : 'text-text-gray hover:text-accent-purple'
            )}
          >
            {item.name}
            <span 
              className={cn(
                'absolute bottom-0 left-0 w-full h-0.5 bg-accent-purple transform transition-transform duration-200',
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
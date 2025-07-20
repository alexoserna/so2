import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-accent-purple text-background hover:bg-accent-purple/90 shadow-lg hover:shadow-accent-purple/25',
      secondary: 'bg-accent-green text-background hover:bg-accent-green/90 shadow-lg hover:shadow-accent-green/25',
      ghost: 'text-text-primary hover:bg-accent-purple/10 hover:text-accent-purple',
      destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-600/25',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-sm',
      lg: 'h-12 px-8 text-base',
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
import { Product } from '@/types';
import productsData from '@/data/products.json';

export const products: Product[] = productsData;

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getInStockProducts(): Product[] {
  return products.filter(product => product.inStock);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function formatPrice(price: number): string {
  return `$${(price / 100).toFixed(2)}`;
}

export function getCategories(): string[] {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
}
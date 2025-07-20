import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductDetails } from '@/components/product/ProductDetails';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/Button';
import { getProductBySlug, getProductsByCategory } from '@/lib/products';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found - Sayings of Senpai',
    };
  }

  return {
    title: `${product.name} - Sayings of Senpai`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map(image => ({
        url: image,
        alt: product.name,
      })),
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Get related products from the same category, excluding current product
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-accent-purple/20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-text-gray">
            <Link href="/" className="hover:text-accent-purple transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-accent-purple transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link 
              href={`/shop?category=${product.category}`} 
              className="hover:text-accent-purple transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-text-primary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductDetails product={product} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-accent-purple/20 bg-gradient-to-b from-background to-accent-purple/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Related Products
              </h2>
              <p className="text-text-gray">
                More wisdom from the same category
              </p>
            </div>

            <ProductGrid products={relatedProducts} />

            <div className="text-center mt-8">
              <Button variant="ghost" size="lg">
                <Link href={`/shop?category=${product.category}`}>
                  View All {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
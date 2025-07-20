import { HeroBanner } from '@/components/home/HeroBanner';
import { LoopingNav } from '@/components/home/LoopingNav';
import { MobilePreview } from '@/components/home/MobilePreview';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <LoopingNav />
      <FeaturedProducts />
      <MobilePreview />
    </>
  );
}
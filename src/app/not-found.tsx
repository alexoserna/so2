import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">404</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Page Not Found</h3>
          <p className="text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        
        <Link href="/">
          <Button className="w-full">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
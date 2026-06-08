import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-grow flex flex-col justify-center items-center h-full">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist on the Livestock Hub." 
        canonicalPath="/404"
      />
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-6">Page Not Found</h2>
      <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center min-h-[48px] justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Return to Home
      </Link>
    </div>
  );
}

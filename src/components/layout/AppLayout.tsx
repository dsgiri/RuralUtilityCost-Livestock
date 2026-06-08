import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from '../ui/CookieBanner';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();

  // Page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  // Scroll tracking (50%)
  useEffect(() => {
    let scrolled50 = false;
    
    const handleScroll = () => {
      if (!scrolled50) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 50) {
          scrolled50 = true;
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'scroll', { percent: 50 });
          }
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600 focus:font-bold">
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden">
        <Navbar />
        <main id="main-content" className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
}

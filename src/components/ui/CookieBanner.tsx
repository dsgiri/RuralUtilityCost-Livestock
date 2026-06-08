import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    
    // Example event tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click', { element: 'cookie_accept_button' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center shadow-xl border-t border-slate-700">
      <div className="text-sm mb-3 sm:mb-0 max-w-4xl pr-4">
        We use cookies to improve your browsing experience, provide analytics, and serve relevant ads. By continuing to use this site, you consent to our use of cookies according to GDPR standards.
      </div>
      <button 
        onClick={handleAccept}
        className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 min-h-[48px] rounded-md text-sm font-semibold transition-colors focus:ring-2 focus:ring-white focus:outline-none"
        aria-label="Accept cookies"
      >
        Accept
      </button>
    </div>
  );
}

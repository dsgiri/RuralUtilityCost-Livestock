import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../data';

export function Footer() {
  return (
    <footer className="h-20 bg-slate-100 border-t border-slate-200 flex items-center mt-auto shrink-0 px-6 font-sans">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-[12px] text-slate-500">
        <div className="text-center sm:text-left mb-3 sm:mb-0">
          &copy; {new Date().getFullYear()} ruralutilitycost.com. Results are estimates for decision support only. Verify all outcomes independently.
        </div>
        
        <div className="flex space-x-4">
          {FOOTER_LINKS.map(link => (
            <div key={link.name}>
              {link.href.startsWith('http') ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                  {link.name}
                </a>
              ) : (
                <Link to={link.href} className="hover:text-slate-900 transition-colors">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

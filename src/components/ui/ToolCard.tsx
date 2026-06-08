import { Link } from 'react-router-dom';
import { LivestockTool } from '../../types';

interface ToolCardProps {
  tool: LivestockTool;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200 h-full">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.05em] px-1.5 py-[2px] rounded bg-[#F1F5F9] text-slate-600">
            {tool.category}
          </span>
          <button
            onClick={onToggleFavorite}
            className={`text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 transition-colors leading-none flex items-center ${
              isFavorite ? 'text-[#EF4444]' : 'text-[#CBD5E1] hover:text-red-400'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            ♥
          </button>
        </div>
        
        <h3 className="font-bold text-[15px] text-slate-900 mb-1">
          {tool.title}
        </h3>
        
        <p className="text-[12px] text-slate-500 mb-3">
          {tool.description}
        </p>

        <div className="text-[11px] text-[#059669] font-semibold mt-3">
          Primary Outcome: {tool.primaryOutcome}
        </div>
        
        <div className="h-[6px] bg-[#F1F5F9] rounded-full my-3 overflow-hidden">
          <div 
            className="h-full bg-[#059669] rounded-full" 
            style={{ width: '65%' }} // Visual mock of progress to match design
          ></div>
        </div>
      </div>
      
      <Link 
        to={tool.href}
        className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-2 px-4 min-h-[48px] rounded-md text-[13px] text-center flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2"
        aria-label={`Open ${tool.title} Calculator`}
      >
        Open Tool
      </Link>
    </div>
  );
}

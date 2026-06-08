import { useParams, Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { LIVESTOCK_TOOLS } from '../data';
import { Heart, ArrowLeft, Info, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SEO } from '../components/seo/SEO';
import { AdSensePlaceholder } from '../components/ui/AdSensePlaceholder';

export function ToolDetail() {
  const { toolId } = useParams<{ toolId: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [val1, setVal1] = useState(10);
  const [val2, setVal2] = useState(500);

  const tool = LIVESTOCK_TOOLS.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        <SEO 
          title="Tool Not Found" 
          description="The requested livestock tool could not be found." 
        />
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Tool not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 flex justify-center items-center min-h-[48px]">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Livestock Hub
        </Link>
      </div>
    );
  }

  const isFav = isFavorite(tool.id);

  // Mock data for the chart to make things look functional
  const mockChartData = Array.from({ length: 7 }).map((_, i) => ({
    name: `Month ${i + 1}`,
    value: Math.floor(val2 * (1 + (i * val1 * 0.01)))
  }));

  return (
    <div className="w-full flex-1">
      <AdSensePlaceholder type="header" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <SEO 
          title={tool.title} 
          description={tool.description} 
          canonicalPath={`/tools/${tool.id}`}
        />
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-6 text-sm min-h-[48px]">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Tool Header */}
          <div className="bg-slate-900 px-6 py-8 border-b border-slate-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 mb-4">
                  {tool.category}
                </span>
                <h1 className="text-3xl font-bold tracking-tight mb-2 leading-tight">{tool.title}</h1>
                <p className="text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base">{tool.description}</p>
              </div>
              <button
                onClick={() => toggleFavorite(tool.id)}
                className="shrink-0 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 min-h-[48px] border border-slate-700 rounded-md transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Heart className={`w-5 h-5 mr-2 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                {isFav ? 'Saved' : 'Save Tool'}
              </button>
            </div>
          </div>

          <AdSensePlaceholder type="in-content" />

          {/* Tool Body */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Input Form Column */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Parameters
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="factor1">
                        Factor 1 (Rate/Count)
                      </label>
                      <input 
                        id="factor1"
                        type="number" 
                        value={val1}
                        onChange={(e) => setVal1(Number(e.target.value))}
                        className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-3 min-h-[48px] text-slate-900" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="factor2">
                        Factor 2 (Base Value)
                      </label>
                      <input 
                        id="factor2"
                        type="number" 
                        value={val2}
                        onChange={(e) => setVal2(Number(e.target.value))}
                        className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-3 min-h-[48px] text-slate-900" 
                      />
                    </div>
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 min-h-[48px] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Calculate Output
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start">
                  <Info className="w-5 h-5 text-amber-600 mr-3 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Calculations are for decision support and estimation only. Independently verify critical agricultural figures.
                  </p>
                </div>
              </div>

              {/* Output Column */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Projected Results</h3>
                  <p className="text-slate-500 text-sm">Review the estimated trends over the planned period.</p>
                </div>

                {/* Progress/Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="text-sm font-medium text-slate-500 mb-1">{tool.primaryOutcome}</div>
                    <div className="text-3xl font-bold text-slate-900">{mockChartData[mockChartData.length - 1].value.toLocaleString()}</div>
                    <div className="text-sm text-green-600 font-medium mt-2">↑ {val1}% projected increase</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="text-sm font-medium text-slate-500 mb-1">Average Factor</div>
                    <div className="text-3xl font-bold text-slate-900">{(val2 * (val1/100)).toFixed(1)}</div>
                    <div className="text-sm text-slate-400 font-medium mt-2">per interval</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-5 shadow-sm h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockChartData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} dx={-10} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        labelStyle={{ fontWeight: 'bold', color: '#1e293b' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorBlue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

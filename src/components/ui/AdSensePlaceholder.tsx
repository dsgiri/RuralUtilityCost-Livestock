export function AdSensePlaceholder({ type }: { type: 'header' | 'sidebar' | 'in-content' | 'footer' }) {
  const minHeight = type === 'header' || type === 'footer' ? '90px' : type === 'sidebar' ? '600px' : '250px';
  
  return (
    <div 
      className="my-5 mx-auto flex justify-center items-center bg-[#f5f5f5] border border-[#ddd] overflow-hidden w-full max-w-full" 
      style={{ minHeight }}
      data-ad-status="unfilled"
    >
      <span className="text-slate-400 text-sm font-medium">Advertisement ({type})</span>
      {/* 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-PUB-YOUR_CLIENT_ID" crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-PUB-YOUR_CLIENT_ID"
             data-ad-slot="YOUR_AD_SLOT"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  );
}

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = "livestock, agriculture, farming, cattle planner, animal growth", 
  canonicalPath = "" 
}: SEOProps) {
  const url = `https://livestock.ruralutilitycost.com${canonicalPath}`;
  const siteName = "Rural Utility Cost";
  
  return (
    <Helmet>
      <title>{title} - Optimized for search</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://ruralutilitycost.com/og-image.jpg" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://ruralutilitycost.com/twitter-image.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": url,
          "publisher": {
            "@type": "Organization",
            "name": siteName
          }
        })}
      </script>
    </Helmet>
  );
}

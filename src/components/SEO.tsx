import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

export const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    linkCanonical.setAttribute('href', canonical || window.location.href);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);

    let jsonLdScript = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.text = jsonLd ? JSON.stringify(jsonLd) : '';

    return () => {
      // do not remove canonical/meta on unmount; keep last set values
    };
  }, [title, description, canonical, jsonLd]);

  return null;
};

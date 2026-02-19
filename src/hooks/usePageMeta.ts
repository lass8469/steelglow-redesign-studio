import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Desiccant.com - Industrial Desiccants & Cargo Protection";
const DEFAULT_DESCRIPTION = "Industrial desiccants and cargo protection solutions from Denmark since 1979. Silica gel, clay desiccants, dunnage bags, and monitoring devices for global shipping.";
const BASE_URL = "https://desiccant.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-home.jpg`;

interface PageMetaOptions {
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string; // Override canonical URL path (e.g., "/en/drybag-i")
}

export const usePageMeta = (
  title: string,
  description: string,
  options?: PageMetaOptions
) => {
  const location = useLocation();
  const ogImage = options?.ogImage
    ? (options.ogImage.startsWith("http") ? options.ogImage : `${BASE_URL}${options.ogImage}`)
    : DEFAULT_OG_IMAGE;
  const ogType = options?.ogType || "website";

  useEffect(() => {
    document.title = title;

    // Description
    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
      return el;
    };

    const meta = setMeta("name", "description", description);

    // OG tags
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${BASE_URL}${location.pathname}`);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", "Desiccant.com");

    // Twitter Card tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = options?.canonicalPath
      ? `${BASE_URL}${options.canonicalPath}`
      : `${BASE_URL}${location.pathname}`;

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", DEFAULT_DESCRIPTION);
      setMeta("property", "og:title", DEFAULT_TITLE);
      setMeta("property", "og:description", DEFAULT_DESCRIPTION);
      setMeta("property", "og:image", DEFAULT_OG_IMAGE);
      setMeta("property", "og:type", "website");
      setMeta("name", "twitter:title", DEFAULT_TITLE);
      setMeta("name", "twitter:description", DEFAULT_DESCRIPTION);
      setMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
      if (canonical) canonical.href = `${BASE_URL}/`;
    };
  }, [title, description, location.pathname, ogImage, ogType]);
};

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Desiccant.com - Industrial Desiccants & Cargo Protection";
const DEFAULT_DESCRIPTION = "Industrial desiccants and cargo protection solutions from Denmark since 1979. Silica gel, clay desiccants, dunnage bags, and monitoring devices for global shipping.";
const BASE_URL = "https://desiccant.com";

export const usePageMeta = (title: string, description: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${BASE_URL}${location.pathname}`);

    // Manage canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${location.pathname}`;

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", DEFAULT_DESCRIPTION);
      if (ogTitle) ogTitle.setAttribute("content", DEFAULT_TITLE);
      if (ogDesc) ogDesc.setAttribute("content", DEFAULT_DESCRIPTION);
      if (canonical) canonical.href = `${BASE_URL}/`;
    };
  }, [title, description, location.pathname]);
};

import { useEffect } from "react";

const DEFAULT_TITLE = "Desiccant.com - Industrial Desiccants & Cargo Protection";
const DEFAULT_DESCRIPTION = "Industrial desiccants and cargo protection solutions from Denmark since 1979. Silica gel, clay desiccants, dunnage bags, and monitoring devices for global shipping.";

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // Also update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", DEFAULT_DESCRIPTION);
      if (ogTitle) ogTitle.setAttribute("content", DEFAULT_TITLE);
      if (ogDesc) ogDesc.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
};

import { useEffect } from "react";

/**
 * Injects a JSON-LD structured data script into <head> and removes it on unmount.
 * Pass `null` to skip injection.
 */
export const useJsonLd = (schema: Record<string, unknown> | null) => {
  useEffect(() => {
    if (!schema) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.setAttribute("data-jsonld", "true");
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [JSON.stringify(schema)]);
};

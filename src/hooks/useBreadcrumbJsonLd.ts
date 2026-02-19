import { useJsonLd } from "./useJsonLd";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const BASE_URL = "https://desiccant.com";

/**
 * Injects BreadcrumbList JSON-LD structured data.
 * Pass an array of breadcrumb items (name + path), e.g.:
 *   [{ name: "Home", path: "/en" }, { name: "Products", path: "/en/products" }, { name: "DRY-BAG I", path: "/en/drybag-i" }]
 */
export const useBreadcrumbJsonLd = (items: BreadcrumbItem[]) => {
  useJsonLd(
    items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.path}`,
          })),
        }
      : null
  );
};

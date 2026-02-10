import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = window.location.origin;

const HrefLangTags = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove lang prefix to get the base path
    const basePath = location.pathname.replace(/^\/(en|da)/, "") || "/";

    const enUrl = `${BASE_URL}/en${basePath === "/" ? "" : basePath}`;
    const daUrl = `${BASE_URL}/da${basePath === "/" ? "" : basePath}`;

    // Remove old hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    const enLink = document.createElement("link");
    enLink.rel = "alternate";
    enLink.hreflang = "en";
    enLink.href = enUrl;

    const daLink = document.createElement("link");
    daLink.rel = "alternate";
    daLink.hreflang = "da";
    daLink.href = daUrl;

    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = enUrl;

    document.head.append(enLink, daLink, defaultLink);

    return () => {
      enLink.remove();
      daLink.remove();
      defaultLink.remove();
    };
  }, [location.pathname]);

  return null;
};

export default HrefLangTags;

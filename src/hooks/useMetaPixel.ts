import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string };
    _fbq?: unknown;
  }
}

const BOT_RESOLUTIONS = ['1280x1200', '3840x2160', '800x600', '1920x890', '1024x1024', '1600x1600', '2000x2000', '1366x1366'];

const isBotResolution = () => {
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  return BOT_RESOLUTIONS.indexOf(screenRes) !== -1;
};

export const useMetaPixel = () => {
  const location = useLocation();
  useEffect(() => {
    if (!isBotResolution() && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search]);
};

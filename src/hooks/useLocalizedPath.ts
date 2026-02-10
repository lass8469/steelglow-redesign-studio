import { useLanguage } from "@/contexts/LanguageContext";

export const useLocalizedPath = () => {
  const { language } = useLanguage();

  const localizedPath = (path: string): string => {
    // Strip any existing language prefix
    const cleanPath = path.replace(/^\/(en|da)/, "") || "/";
    return `/${language}${cleanPath === "/" ? "" : cleanPath}`;
  };

  return localizedPath;
};

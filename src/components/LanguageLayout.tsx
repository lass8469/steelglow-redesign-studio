import { useEffect } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import HrefLangTags from "./HrefLangTags";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

const VALID_LANGS = ["en", "da"] as const;

const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useGoogleAnalytics();

  useEffect(() => {
    if (lang && VALID_LANGS.includes(lang as any)) {
      if (lang !== language) {
        setLanguage(lang as "en" | "da");
      }
    }
  }, [lang]);

  return (
    <>
      <HrefLangTags />
      <Outlet />
    </>
  );
};

export default LanguageLayout;

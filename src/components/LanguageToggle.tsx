import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const switchTo = (lang: "en" | "da") => {
    // Replace the language prefix in the current path
    const newPath = location.pathname.replace(/^\/(en|da)/, `/${lang}`);
    navigate(newPath + location.search + location.hash);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-foreground/80 hover:text-foreground">
          <Globe className="h-4 w-4" />
          <span className="uppercase font-medium">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border-border">
        <DropdownMenuItem 
          onClick={() => switchTo("en")}
          className={language === "en" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchTo("da")}
          className={language === "da" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇩🇰</span>
          Dansk
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;

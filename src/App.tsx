import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageLayout from "@/components/LanguageLayout";
import Index from "./pages/Index";
import SilicaProduct from "./pages/SilicaProduct";
import DryBagIProduct from "./pages/DryBagIProduct";
import DryBagIIIProduct from "./pages/DryBagIIIProduct";
import DunnageBagProduct from "./pages/DunnageBagProduct";
import MolecularSieveProduct from "./pages/MolecularSieveProduct";
import CalciumChlorideProduct from "./pages/CalciumChlorideProduct";
import RetailProduct from "./pages/RetailProduct";
import EdgeProtectorsProduct from "./pages/EdgeProtectorsProduct";
import AntiSlipProduct from "./pages/AntiSlipProduct";
import StabustrapProduct from "./pages/StabustrapProduct";
import DataloggerProduct from "./pages/DataloggerProduct";
import AboutPage from "./pages/AboutPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import SocialProofPage from "./pages/SocialProofPage";
import ContactPage from "./pages/ContactPage";
import DownloadsPage from "./pages/DownloadsPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";

const queryClient = new QueryClient();

const appRoutes = (
  <>
    <Route index element={<Index />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="silica" element={<SilicaProduct />} />
    <Route path="drybag-i" element={<DryBagIProduct />} />
    <Route path="drybag-iii" element={<DryBagIIIProduct />} />
    <Route path="dunnage-bag" element={<DunnageBagProduct />} />
    <Route path="molecular-sieve" element={<MolecularSieveProduct />} />
    <Route path="calcium-chloride" element={<CalciumChlorideProduct />} />
    <Route path="retail" element={<RetailProduct />} />
    <Route path="edge-protectors" element={<EdgeProtectorsProduct />} />
    <Route path="anti-slip" element={<AntiSlipProduct />} />
    <Route path="stabustrap" element={<StabustrapProduct />} />
    <Route path="datalogger" element={<DataloggerProduct />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="applications" element={<ApplicationsPage />} />
    <Route path="blog" element={<BlogPage />} />
    <Route path="blog/:slug" element={<BlogArticlePage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="downloads" element={<DownloadsPage />} />
    <Route path="faq" element={<FAQPage />} />
    <Route path="testimonials" element={<SocialProofPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="dunnage-bags" element={<Navigate to="../dunnage-bag" replace />} />
  </>
);

const RootRedirect = () => {
  const saved = localStorage.getItem("language");
  const lang = saved === "da" ? "da" : "en";
  return <Navigate to={`/${lang}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Root redirects to preferred language */}
            <Route path="/" element={<RootRedirect />} />
            
            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LanguageLayout />}>
              {appRoutes}
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageLayout from "@/components/LanguageLayout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy-loaded routes for code splitting
const SilicaProduct = lazy(() => import("./pages/SilicaProduct"));
const DryBagIProduct = lazy(() => import("./pages/DryBagIProduct"));
const DryBagIIIProduct = lazy(() => import("./pages/DryBagIIIProduct"));
const DunnageBagProduct = lazy(() => import("./pages/DunnageBagProduct"));
const MolecularSieveProduct = lazy(() => import("./pages/MolecularSieveProduct"));
const CalciumChlorideProduct = lazy(() => import("./pages/CalciumChlorideProduct"));
const RetailProduct = lazy(() => import("./pages/RetailProduct"));
const EdgeProtectorsProduct = lazy(() => import("./pages/EdgeProtectorsProduct"));
const AntiSlipProduct = lazy(() => import("./pages/AntiSlipProduct"));
const StabustrapProduct = lazy(() => import("./pages/StabustrapProduct"));
const DataloggerProduct = lazy(() => import("./pages/DataloggerProduct"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ApplicationsPage = lazy(() => import("./pages/ApplicationsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const SocialProofPage = lazy(() => import("./pages/SocialProofPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DownloadsPage = lazy(() => import("./pages/DownloadsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));

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
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              <Route path="/:lang" element={<LanguageLayout />}>
                {appRoutes}
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

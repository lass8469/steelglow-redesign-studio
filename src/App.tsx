import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SilicaProduct from "./pages/SilicaProduct";
import DryBagIProduct from "./pages/DryBagIProduct";
import DryBagIIIProduct from "./pages/DryBagIIIProduct";
import DunnageBagProduct from "./pages/DunnageBagProduct";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/silica" element={<SilicaProduct />} />
          <Route path="/drybag-i" element={<DryBagIProduct />} />
          <Route path="/drybag-iii" element={<DryBagIIIProduct />} />
          <Route path="/dunnage-bag" element={<DunnageBagProduct />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

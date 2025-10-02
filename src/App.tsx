import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Storefront from "./pages/Storefront";
import ProductDetail from "./pages/ProductDetail";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import Discover from "./pages/Discover";
import StartSelling from "./pages/StartSelling";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Community from "./pages/Community";
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/community" element={<Community />} />
          <Route path="/start-selling" element={<StartSelling />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:creatorSlug" element={<Storefront />} />
          <Route path="/:creatorSlug/:productId" element={<ProductDetail />} />
           <Route path="/start-selling" element={<StartSelling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add click animation to header and footer elements
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Add animation to header/footer elements when clicked
      if (target.tagName === 'HEADER' || target.closest('header') || 
          target.tagName === 'FOOTER' || target.closest('footer')) {
        const element = target.tagName === 'HEADER' || target.tagName === 'FOOTER' 
          ? target 
          : (target.closest('header') || target.closest('footer'));
          
        if (element) {
          element.classList.add('animate-click');
          setTimeout(() => {
            element.classList.remove('animate-click');
          }, 400);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

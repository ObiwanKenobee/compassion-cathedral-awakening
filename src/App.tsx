
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Home from "./pages/Home";
import RitualDashboard from "./pages/RitualDashboard";
import CompassionMentor from "./pages/CompassionMentor";
import PhilosophersForge from "./pages/PhilosophersForge";
import HistoryLantern from "./pages/HistoryLantern";
import SoulWallet from "./pages/SoulWallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<RitualDashboard />} />
              <Route path="/mentor" element={<CompassionMentor />} />
              <Route path="/philosophy" element={<PhilosophersForge />} />
              <Route path="/history" element={<HistoryLantern />} />
              <Route path="/wallet" element={<SoulWallet />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

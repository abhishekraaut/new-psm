import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MinistryOfHeavyIndustries from "./pages/MinistryOfHeavyIndustries";
import WhosWho from "./pages/WhosWho";
import Scheme from "./pages/Scheme";
import KeyHighlights from "./pages/KeyHighlights";
import Documents from "./pages/Documents";
import Announcements from "./pages/Announcements";
import ImportantLinks from "./pages/ImportantLinks";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import CompanyProfile from "./pages/CompanyProfile";
import EscrowAccount from "./pages/EscrowAccount";
import ConcessionAgreement from "./pages/ConcessionAgreement";
import ConcessionAgreementView from "./pages/ConcessionAgreementView";
import RequestVerification from "./pages/RequestVerification";
import UserManagement from "./pages/UserManagement";
import Invoices from "./pages/Invoices";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ministry-of-heavy-industries" element={<MinistryOfHeavyIndustries />} />
          <Route path="/whos-who" element={<WhosWho />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/key-highlights" element={<KeyHighlights />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/important-links" element={<ImportantLinks />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/escrow-account" element={<EscrowAccount />} />
          <Route path="/concession-agreement" element={<ConcessionAgreement />} />
          <Route path="/concession-agreement/view/:id" element={<ConcessionAgreementView />} />
          <Route path="/request-verification" element={<RequestVerification />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/help-support" element={<HelpSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

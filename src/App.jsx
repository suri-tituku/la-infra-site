import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";

import InvestorPopup from "./components/InvestorPopup";
import PageTransition from "./components/PageTransition";

/* Lazy Pages — Updated */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Developments = lazy(() => import("./pages/Developments"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Investor = lazy(() => import("./pages/Investor"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
/* Scroll to top on route change */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* Page loader */

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-brand-700 border-t-transparent rounded-full animate-spin" />
        <span className="font-body text-sm text-brand-600 tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Investor lead popup */}
      <InvestorPopup />

      <main>
        <Suspense fallback={<PageLoader />}>
          <PageTransition>
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/developments" element={<Developments />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/investor" element={<Investor />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<Privacy />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </>
  );
}

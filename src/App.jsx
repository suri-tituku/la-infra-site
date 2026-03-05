import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";

import InvestorPopup from "./components/InvestorPopup";
import PageTransition from "./components/PageTransition";

/* Lazy Pages */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Mission = lazy(() => import("./pages/Mission"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));

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

          {/* Page transition animation */}
          <PageTransition>

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/about-us" element={<About />} />

              <Route path="/mission-vision" element={<Mission />} />

              <Route path="/clients" element={<Clients />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/privacy-policy" element={<Privacy />} />

              <Route path="*" element={<Home />} />

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
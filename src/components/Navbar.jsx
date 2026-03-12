import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "../assets/images/logo/la-infra-logo.png";
import logoDark from "../assets/images/logo/la-infra-logo.jpg";
// const navLinks = [
//   { label: "Home", to: "/" },
//   { label: "About", to: "/about-us" },
//   { label: "Mission & Vision", to: "/mission-vision" },
//   { label: "Clients", to: "/clients" },
//   { label: "Contact", to: "/contact" },
// ];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Leadership", to: "/leadership" },
  { label: "Developments", to: "/developments" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Investor", to: "/investor" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useDarkLogo = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled
    ? "bg-forest/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] py-3"
    : isHome
      ? "bg-transparent py-5"
      : "bg-forest py-4";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={useDarkLogo ? logoDark : logoDark}
            alt="LA Infra - Land Development Company"
            key={useDarkLogo ? "dark" : "dark"} // smooth transition
            // src={useDarkLogo ? logoDark : logoLight}
            // alt="LA Infra - Land Development Company"
            // key={useDarkLogo ? "dark" : "light"} // smooth transition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.05 }}
            className={`
    object-contain
    ${isHome ? "h-12" : "h-10"}
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
    transition-all duration-300
  `}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 font-body text-sm tracking-wide transition-all duration-300
    ${isActive ? "text-brand-300" : "text-cream/80 hover:text-cream"}`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-brand-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-4 btn-primary text-xs hover:scale-[1.04] transition-transform"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-cream origin-left transition-all"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1.5px] bg-cream"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
            }
            className="block w-6 h-[1.5px] bg-cream origin-left transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-forest/98 backdrop-blur-md border-t border-brand-800/50 overflow-hidden"
          >
            <nav
              className="container-site py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 font-body text-sm tracking-wide border-l-2 transition-all
                     ${
                       isActive
                         ? "border-brand-400 text-brand-300 bg-brand-900/30"
                         : "border-transparent text-cream/70 hover:text-cream hover:border-brand-700"
                     }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-3 justify-center text-xs"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

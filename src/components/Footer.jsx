import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo/la-infra-logo.jpeg";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream/70 font-body" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
            <img
              src={logo}
              alt="LA Infra Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm text-cream/60 mb-6">
            A value-driven real estate and land development organization
            specializing in farmland ventures, garden lands, estate
            developments, and nature-inspired getaway projects.
          </p>
          <div className="text-xs text-brand-500 tracking-widest uppercase font-semibold">
            Ethical · Transparent · Sustainable
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about-us" },
              { label: "Leadership", to: "/leadership" },
              { label: "Developments", to: "/developments" },
              { label: "Sustainability", to: "/sustainability" },
              { label: "Investor Relations", to: "/investor" },
              { label: "Contact Us", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy-policy" },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-brand-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-600" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <svg
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
             <span className="text-cream/60">
  4th Floor, Piller, 36 Square, H.No.8-2-293/82/A/481/IV-2,<br/>
  Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033
</span>
            </li>
            <li className="flex gap-3">
              <svg
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
               href="tel:+917842262261"
                className="text-cream/60 hover:text-brand-300 transition-colors"
              >
                +91 78422 62261
              </a>
            </li>
            <li className="flex gap-3">
              <svg
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:contact@thelainfra.com"
                className="text-cream/60 hover:text-brand-300 transition-colors"
              >
                contact@thelainfra.com
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-xs text-brand-500 uppercase tracking-widest mb-3 font-semibold">
              Operating Regions
            </p>
            <p className="text-sm text-cream/50">
              Telangana · Andhra Pradesh · Karnataka
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-900/60">
        <div className="container-site py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <span>© {year} LA Infra. All rights reserved.</span>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-brand-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>CIN: Pending Registration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

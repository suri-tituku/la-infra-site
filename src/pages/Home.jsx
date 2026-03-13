import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO from "../components/SEO";
import SectionReveal from "../components/SectionReveal";
import FeatureCard from "../components/FeatureCard";
import LeadershipCard from "../components/LeadershipCard";
import CTABanner from "../components/CTABanner";
import StatsSection from "../components/StatsSection";
import ProjectsGallery from "../components/ProjectsGallery";
import LuxuryPillarsTimeline from "../components/LuxuryPillarsTimeline";
import heroImage from "../assets/images/hero/hero-farmland.webp";
import StorySection from "../components/StorySection";
import kolliImg from "../assets/images/leaders/kolli-sambireddy-chairman-icon.jpg";
import dayakarImg from "../assets/images/leaders/k-dayakar-reddy-founder-and-managing-director-icon.webp";
import RealEstateSchema from "../components/RealEstateSchema";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
//import LandMap from "../components/LandMap"
const trustPillars = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Legal Due Diligence",
    body: "Every project undergoes rigorous legal scrutiny ensuring clear ownership, compliance, and risk-free transactions.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Transparency by Design",
    body: "From documentation to communication, our processes empower customers with complete clarity and confidence.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Nature-Respectful",
    body: "Projects are planned to coexist with the land, preserving ecological balance while enhancing long-term value.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Disciplined Growth",
    body: "Steady, responsible expansion without shortcuts, speculation, or pressure.",
  },
];

const leaders = [
  {
    name: "Kolli Sambireddy",
    suffix: "K. S. Reddy",
    title: "Chairman",
    profileId: "chairman", // 👈 add this
    image: kolliImg,
    bio: "Land rewards patience, discipline, and respect. Those who understand the land understand true value.",
    // highlights: [
    //   "Clear-title investment delivery",
    //   "Ethical leadership",
    //   "Long-term value focus",
    // ],
  },
  {
    name: "K. Dayakar Reddy",
    suffix: "B.A., LL.B.",
    title: "Founder & Managing Director",
    profileId: "md",
    image: dayakarImg,
    bio: "Trust is the true foundation of every land investment.",
    // highlights: [
    //   "End-to-end legal due diligence",
    //   "Clear-title verification",
    //   "Transparent development model",
    // ],
  },
  // {
  //   name: "Solipuram Anirudh Reddy",
  //   suffix: "S.A.R., MS USA",
  //   title: "Director",
  //   profileId: "director",
  //   image: anirudhImg,
  //   bio: "Eco-conscious entrepreneur with global perspective on sustainable development.",
  //   highlights: [
  //     "Eco-sensitive design",
  //     "Nature-based developments",
  //     "Founder Aranya Nature School",
  //   ],
  // },
  // {
  //   name: "Sanghamitra Reddy K",
  //   suffix: "BA LLB",
  //   title: "CFO & Co-Founder",
  //   profileId: "cfo",
  //   image: mitraImg,
  //   bio: "Combines legal insight with financial discipline to deliver secure developments.",
  //   highlights: [
  //     "Project structuring",
  //     "Financial planning",
  //     "Regulatory compliance",
  //   ],
  // },
];

export default function Home() {
  return (
    <>
      <SEO
        title="LA Infra – Ethical Real Estate & Land Development"
        description="LA Infra specializes in farmland ventures, garden lands, estate developments, and eco-getaway projects."
        url="https://thelainfra.com"
      />
      <RealEstateSchema />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.85)_100%)]" />

        {/* Content */}
        <div className="container-site relative z-10 text-center pt-28 pb-24">
          <motion.span
            className="text-brand-300 uppercase tracking-widest text-sm mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Telangana · Andhra Pradesh · Karnataka
          </motion.span>

          <motion.h1
            className="font-display text-display-xl text-white mb-8 leading-[1.15] max-w-5xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span className="text-white/90tracking-wide">
              Ethical Land Development
            </span>
            <br />
            <span className="text-brand-300 ">Restoring Trust</span>
            <br />
            <span className="text-brand-300 ">in Land Development</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg max-w-xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            LA Infra creates secure farmland, nature estates, and eco-retreat
            destinations built on legal clarity, environmental responsibility,
            and long-term value.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/about-us"
              className="px-8 py-3 bg-brand-600 text-white rounded-sm 
hover:bg-brand-700 hover:scale-105 hover:shadow-2xl 
active:scale-95 transition-all duration-300"
            >
              Discover LA Infra
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-sm hover:bg-white hover:text-black transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
      <StatsSection />
      <LuxuryPillarsTimeline />
      {/* ===== FOUNDER QUOTE ===== */}
      <section className="relative py-20 bg-cream overflow-hidden">
        {/* subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        <div className="container-site relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Luxury Divider */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-amber-400" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            {/* Quote */}
            <blockquote className="font-display text-3xl md:text-4xl text-forest italic leading-[1.8]">
              “Cars depreciate. Houses maintain value. But land creates
              landlords.”
            </blockquote>

            {/* Author */}
            <p className="mt-8 text-sm tracking-[0.35em] text-amber-700 uppercase">
              — K. Dayakar Reddy
            </p>
            <p className="text-forest/50 text-xs tracking-wider mt-2">
              Founder & Managing Director
            </p>

            {/* Bottom Divider */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-amber-400" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* LEADERSHIP */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">Our Leadership</span>
              <h2 className="section-heading ">
                Guided by Experience & Integrity
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {leaders.map((l, i) => (
              <LeadershipCard key={i} {...l} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>{" "}
      <StorySection />
      {/* <ProjectsGallery /> */}
      <CTABanner
        heading="Ready to Invest in Ethical Land Development?"
        sub="Connect with our team to explore farmland and estate opportunities."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="Abous Us"
        secondaryTo="/about-us"
      />
    </>
  );
}

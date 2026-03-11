import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import GoldParticles from "../components/GoldParticles";
import chairmanImg from "../assets/images/leaders/kolli-sambireddy-chairman.png";
import mdImg from "../assets/images/leaders/k-dayakar-reddy-founder-and-managing-director.png";
import cofcfo from "../assets/images/leaders/mitra-co-founder-and-chief-financial-officer.png";
import directorImg from "../assets/images/leaders/anirudh-reddy-solipuram-director.png";
import SectionReveal from "../components/SectionReveal";
import { useLocation } from "react-router-dom";

export default function Leadership() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(null);
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (active) {
      const el = document.querySelector(".premium-scroll");
      if (el) el.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);
  const leaders = [
    {
      id: "chairman",
      name: "Kolli Sambireddy (K. S. Reddy)",
      role: "Chairman",
      img: chairmanImg,
      short:
        "Agriculture-rooted land strategist with decades of experience in land aggregation and responsible development.",
      full: `Born into an agricultural family, Kolli Sambireddy has been closely connected to farming and land stewardship for most of his life and has practiced organic farming for more than four decades.

Over the years, he has successfully aggregated over 5,000 acres of land and supported several prominent real estate developers across Telangana, Andhra Pradesh, and Karnataka.

Known for his strong work ethic, discipline, and commitment to ethical practices, he believes that sustainable success in land development is built through credibility, consistency, and responsible decision-making.

As Chairman of LA Infra, he provides strategic guidance to ensure that the company’s projects remain aligned with the principles of ethical land development and long-term value creation.`,
    },
    {
      id: "md",
      name: "K. Dayakar Reddy",
      role: "Founder & Managing Director",
      img: mdImg,
      short:
        "Legal-driven real estate leader focused on transparency, due diligence, and ethical land development.",
      full: `K. Dayakar Reddy founded LA Infra with a clear commitment to bringing legal clarity and transparency into land development.

With a background in law, he specializes in real estate legal due diligence, ensuring that land transactions are supported by proper documentation and verified ownership.

Under his leadership, LA Infra focuses on developing secure farmland ventures, nature estates, and eco-driven retreat environments built on responsible planning and ethical practices.

He strongly believes that long-term success in real estate is built on honesty, accountability, and trust rather than speculative promises.`,
    },
    {
      id: "director",
      name: "Anirudh Reddy Solipuram",
      role: "Director",
      img: directorImg,
      short:
        "Eco-conscious entrepreneur bringing global sustainability insights to nature-aligned land development.",
      full: `Anirudh Reddy Solipuram brings a global perspective to sustainable development and responsible land use.

Holding a Master’s degree from the United States, he combines technical knowledge with a strong interest in ecology, organic farming, and sustainable architecture.

His international exposure across multiple countries has allowed him to study wellness retreats, eco-resorts, and nature-driven development models around the world.

Alongside his work in land development, he is actively engaged in the education sector, promoting nature-based learning environments and holistic educational initiatives.

At LA Infra, he contributes to the vision of creating developments that integrate nature, sustainability, and responsible land stewardship.`,
    },
  ];

  const highlightStyle = {
    boxShadow: "0 0 0 6px rgba(251,191,36,0.35)",
    scale: 1.02,
  };

  const normalStyle = {
    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
    scale: 1,
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setActiveId(id);

      // Remove highlight after animation
      const timer = setTimeout(() => setActiveId(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const yOffset = -180; // adjust based on navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Leadership & Stewardship | LA Infra Ethical Land Development"
        description="Meet the leadership team guiding LA Infra with agricultural heritage, legal expertise, sustainability vision, and responsible land stewardship across South India."
        url="https://lainfra.com/leadership"
      />

      {/* HERO — SAME STYLE AS ABOUT PAGE */}
      <section className="relative bg-forest pt-32 pb-12 text-cream overflow-hidden">
        <GoldParticles />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/90" />

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm font-body">
              <li>
                <a
                  href="/"
                  className="text-cream/40 hover:text-brand-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="text-cream/20">/</li>
              <li className="text-cream/80 font-medium">Leadership</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-display-lg mb-6"
          >
            Leadership & Stewardship
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cream/70 max-w-3xl leading-relaxed"
          >
            The strength of LA Infra lies in the experience, values, and vision
            of its leadership team. Bringing together expertise across
            agriculture, land aggregation, legal due diligence, sustainability,
            financial governance, and project execution, the leadership is
            committed to developments guided by integrity, transparency, and
            responsible land stewardship.
            <br />
            <br />
            Each member contributes to a shared vision of creating land
            developments that combine secure ownership, thoughtful planning, and
            long-term value for investors and communities.
          </motion.p>
        </div>
      </section>

      {/* ================= LEADERSHIP MESSAGES ================= */}
      <section className="py-16 bg-cream overflow-hidden">
        <div className="container-site max-w-7xl space-y-24">
          {/* ================= CHAIRMAN MESSAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200/30 via-transparent to-amber-400/20 blur-2xl" />
              <div className="relative rounded-[18px] overflow-hidden shadow-2xl">
                <img
                  src={chairmanImg}
                  alt="Chairman LA Infra"
                  className="w-full h-[660px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-brand-700 uppercase tracking-[0.3em] text-xl mb-4">
                Chairman’s Message
              </p>

              <div className="space-y-6 text-lg leading-[2] text-forest/80 max-h-[520px] overflow-y-auto pr-4 custom-green-scroll">
                <p>
                  Land has always been more than a resource — it is the
                  foundation upon which livelihoods, communities, and
                  generations are built.
                </p>

                <p>
                  Having grown up in an agricultural family and spent decades
                  working closely with the land, I have come to deeply respect
                  its value and responsibility. For over forty years, my journey
                  in agriculture and land development has taught me that true
                  success with land comes from patience, discipline, and
                  integrity.
                </p>

                <p>
                  At LA Infra, we believe that land should be developed
                  thoughtfully and responsibly. Every project we undertake is
                  guided by the principle that development must respect the
                  land, protect the interests of investors, and contribute
                  positively to the surrounding environment and communities.
                </p>

                <p>
                  Over the years, we have had the opportunity to aggregate and
                  work with thousands of acres of land across multiple regions.
                  This experience has strengthened our commitment to ensuring
                  that every development stands on legal clarity, ethical
                  practices, and long-term value.
                </p>

                <p>
                  Our goal is not simply to develop land, but to create
                  opportunities that benefit both present and future
                  generations. By combining agricultural wisdom with responsible
                  development practices, LA Infra continues to move forward with
                  a clear focus on trust, sustainability, and lasting value.
                </p>
              </div>

              <div className="mt-12">
                <p className="font-display text-2xl text-forest">
                  Kolli Sambireddy
                </p>
                <p className="text-brand-600">Chairman, LA Infra LLP</p>
              </div>
            </div>
          </motion.div>

          {/* ================= GOLD DIVIDER ================= */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rotate-45 border border-amber-400" />
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* ================= FOUNDER MESSAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            {/* Content */}
            <div className="order-2 md:order-1">
              <p className="text-brand-700 uppercase tracking-[0.3em] text-xl mb-4">
                Founder’s Message
              </p>
              <div className="space-y-6 text-lg leading-[2] text-forest/80 max-h-[520px] overflow-y-auto pr-4 custom-green-scroll">
                <p>
                  At LA Infra, our journey is built on a simple but powerful
                  belief — land development must be guided by integrity,
                  responsibility, and long-term vision.
                </p>

                <p>
                  For many people, land represents more than an investment. It
                  represents security, opportunity, and a legacy that can be
                  passed on to future generations. Recognizing this
                  responsibility, we established LA Infra with a commitment to
                  approach land development with legal clarity, ethical
                  practices, and disciplined planning.
                </p>

                <p>
                  In an industry often driven by speculation and short-term
                  gains, our philosophy is different. We believe that real value
                  is created when development respects the land, protects the
                  interests of investors, and contributes positively to the
                  communities around it.
                </p>

                <p>
                  Every project undertaken by LA Infra reflects our core
                  principles — secure land ownership, responsible development,
                  ecological awareness, and transparent processes. These values
                  guide every decision we make and define the foundation upon
                  which the organization continues to grow.
                </p>

                <p>
                  Our vision is not only to develop land, but to build a trusted
                  ecosystem where investors, communities, and nature coexist in
                  a balanced and sustainable manner.
                </p>

                <p>
                  As we move forward, our commitment remains clear: to create
                  developments that stand on trust, responsibility, and
                  long-term value for generations to come.
                </p>
              </div>

              <div className="mt-12">
                <p className="font-display text-2xl text-forest">
                  K. Dayakar Reddy
                </p>
                <p className="text-brand-600">
                  Founder & Managing Partner, LA Infra LLP
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200/30 via-transparent to-amber-400/20 blur-2xl" />
              <div className="relative rounded-[18px] overflow-hidden shadow-2xl">
                <img
                  src={mdImg}
                  alt="Founder LA Infra"
                  className="w-full h-[660px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ===== Gold Ornament Divider ===== */}
      <div className="flex items-center justify-center gap-6 my-10">
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 rotate-45 border border-amber-400" />
          <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
        </div>

        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>

      {/* LEADERS — EXECUTIVE ORDER LAYOUT */}
      <section className="py-12 bg-cream">
        <div className="container-site max-w-7xl space-y-12">
          {/* ================= CHAIRMAN ================= */}
          <motion.div
            id="chairman"
            animate={
              activeId === "chairman"
                ? {
                    boxShadow: "0 0 0 6px rgba(251,191,36,0.35)",
                    scale: 1.02,
                  }
                : {
                    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                    scale: 1,
                  }
            }
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="rounded-[14px] overflow-hidden shadow-xl">
              <img
                src={chairmanImg}
                alt="Kolli Sambireddy"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-brand-500 uppercase tracking-[0.25em] text-sm mb-3">
                Chairman
              </p>

              <h2 className="font-display text-4xl text-forest mb-4">
                Kolli Sambireddy (K. S. Reddy)
              </h2>

              <p className="text-lg text-forest/80 leading-relaxed mb-6">
                Agriculture-rooted land strategist with decades of experience in
                land aggregation and responsible development.
              </p>

              <div className="space-y-5 text-forest/70 leading-[1.4]">
                <p>
                  Born into an agricultural family, Kolli Sambireddy has been
                  closely connected to farming and land stewardship for most of
                  his life and has practiced organic farming for more than four
                  decades.
                </p>

                <p>
                  Over the years, he has successfully aggregated over 5,000
                  acres of land and supported several prominent real estate
                  developers across Telangana, Andhra Pradesh, and Karnataka.
                </p>

                <p>
                  Known for his strong work ethic, discipline, and commitment to
                  ethical practices, he believes that sustainable success in
                  land development is built through credibility, consistency,
                  and responsible decision-making.
                </p>

                <p>
                  As Chairman of LA Infra, he provides strategic guidance to
                  ensure that the company’s projects remain aligned with the
                  principles of ethical land development and long-term value
                  creation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===== Gold Ornament Divider ===== */}
          <div className="flex items-center justify-center gap-6 my-5">
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rotate-45 border border-amber-400" />
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
            </div>

            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* ================= FOUNDER & MD ================= */}
          <motion.div
            id="md"
            animate={activeId === "md" ? highlightStyle : normalStyle}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center scroll-mt-28"
          >
            {/* Content */}
            <div className="order-2 md:order-1">
              <p className="text-brand-500 uppercase tracking-[0.25em] text-sm mb-4">
                Founder & Managing Director (Main Highlight)
              </p>

              <h2 className="font-display text-4xl text-forest mb-6">
                K. Dayakar Reddy (B.A., LL.B.)
              </h2>

              <p className="text-lg text-forest/80 leading-relaxed mb-6">
                Legal-driven real estate leader focused on transparency, due
                diligence, and ethical land development.
              </p>

              <div className="space-y-5 text-forest/70 leading-[1.9]">
                <p>
                  K. Dayakar Reddy founded LA Infra with a clear commitment to
                  bringing legal clarity and transparency into land development.
                </p>

                <p>
                  With a background in law, he specializes in real estate legal
                  due diligence, ensuring that land transactions are supported
                  by proper documentation and verified ownership.
                </p>

                <p>
                  Under his leadership, LA Infra focuses on developing secure
                  farmland ventures, nature estates, and eco-driven retreat
                  environments built on responsible planning and ethical
                  practices.
                </p>

                <p>
                  He strongly believes that long-term success in real estate is
                  built on honesty, accountability, and trust rather than
                  speculative promises.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 rounded-[14px] overflow-hidden shadow-xl">
              <img
                src={mdImg}
                alt="K Dayakar Reddy"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </motion.div>
          {/* ===== Gold Ornament Divider ===== */}
          <div className="flex items-center justify-center gap-6 my-5">
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rotate-45 border border-amber-400" />
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
            </div>

            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* ================= DIRECTOR ================= */}
          <motion.div
            id="director"
            animate={activeId === "director" ? highlightStyle : normalStyle}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center scroll-mt-28"
          >
            {/* Image */}
            <div className="rounded-[14px] overflow-hidden shadow-xl">
              <img
                src={directorImg}
                alt="Anirudh Reddy Solipuram"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-brand-500 uppercase tracking-[0.25em] text-sm mb-2">
                Director
              </p>

              <h2 className="font-display text-4xl text-forest mb-4">
                Anirudh Reddy Solipuram (S.A.R., MS USA)
              </h2>

              <p className="text-lg text-forest/80 leading-relaxed mb-2">
                Eco-conscious entrepreneur bringing global sustainability
                insights to nature-aligned land development.
              </p>

              <div className="space-y-5 text-forest/70 leading-[1.3]">
                <p>
                  Anirudh Reddy Solipuram brings a global perspective to
                  sustainable development and responsible land use.
                </p>

                <p>
                  Holding a Master’s degree from the United States, he combines
                  technical knowledge with a strong interest in ecology, organic
                  farming, and sustainable architecture.
                </p>

                <p>
                  His international exposure across multiple countries has
                  allowed him to study wellness retreats, eco-resorts, and
                  nature-driven development models around the world.
                </p>

                <p>
                  Alongside his work in land development, he is actively engaged
                  in the education sector, promoting nature-based learning
                  environments and holistic educational initiatives.
                </p>

                <p>
                  At LA Infra, he contributes to the vision of creating
                  developments that integrate nature, sustainability, and
                  responsible land stewardship.
                </p>
              </div>
            </div>
          </motion.div>
          {/* ===== Gold Ornament Divider ===== */}
          <div className="flex items-center justify-center gap-6 my-5">
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rotate-45 border border-amber-400" />
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
            </div>

            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* ================= CFO ================= */}
          <motion.div
            id="cfo"
            animate={activeId === "cfo" ? highlightStyle : normalStyle}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center scroll-mt-28"
          >
            {/* Content */}
            <div className="order-2 md:order-1">
              <p className="text-brand-500 uppercase tracking-[0.25em] text-sm mb-4">
                Co-Founder & Chief Financial Officer
              </p>

              <h2 className="font-display text-4xl text-forest mb-6">
                Sanghamitra Reddy K (B.A., LL.B.)
              </h2>

              <p className="text-lg text-forest/80 leading-relaxed mb-6">
                Financial strategist and legal professional guiding governance,
                compliance, and capital planning.
              </p>

              <div className="space-y-5 text-forest/70 leading-[1.9]">
                <p>
                  Sanghamitra serves as the Co-Founder and Chief Financial
                  Officer of LA Infra, contributing both legal expertise and
                  financial leadership to the organization.
                </p>

                <p>
                  With a background in law, she plays an important role in
                  overseeing financial strategy, capital planning, regulatory
                  compliance, and investor relations.
                </p>

                <p>
                  Her work helps ensure that the company’s developments are
                  supported by strong financial discipline and sound legal
                  frameworks, enabling projects to remain sustainable and
                  transparent.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 rounded-[14px] overflow-hidden shadow-xl">
              <img
                src={cofcfo}
                alt="Mitra"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                 flex items-center justify-center 
                 p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative bg-white max-w-4xl w-full rounded-[18px] shadow-2xl overflow-hidden max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 flex-1 min-h-0">
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full
             bg-white/80 backdrop-blur-md border border-brand-300/40
             shadow-md hover:shadow-lg
             flex items-center justify-center
             transition-all duration-300
             hover:scale-110 hover:rotate-90 group"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-4 h-4 text-forest group-hover:text-brand-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M6 18L18 6"
                    />
                  </svg>
                </button>
                {/* LEFT IMAGE 
                <div className="h-full">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT (SCROLL FIXED) 
                <div className="p-8 md:p-10 overflow-y-auto min-h-0 premium-scroll scroll-smooth">
                  <h2 className="font-display text-2xl text-forest mb-2">
                    {active.name}
                  </h2>
                  <p className="text-brand-500 mb-6">{active.role}</p>

                  <div className="text-forest/70 whitespace-pre-line leading-relaxed text-sm">
                    {active.full}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* ===== Gold Ornament Divider ===== */}
      <div className="flex items-center justify-center gap-6 my-5">
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 rotate-45 border border-amber-400" />
          <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
        </div>

        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>

      {/* TEAM — MATCHING LEADERSHIP STYLE */}
      <section className="py-16 bg-cream">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">Our Team</span>
              <h2 className="section-heading">
                Operational & Advisory Leadership
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* COO */}
            <SectionReveal delay={0.1}>
              <div className="bg-white rounded-[14px] shadow-soft p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <p className="text-brand-500 uppercase tracking-wide text-xs mb-2">
                  Chief Operating Officer
                </p>

                <h3 className="font-display text-xl text-forest mb-4">
                  D. Venkat Reddy
                </h3>

                <p className="text-forest font-medium mb-4 leading-relaxed">
                  Operations leader responsible for project execution, site
                  coordination, and development efficiency.
                </p>

                <div className="space-y-3 text-forest/70 text-sm leading-relaxed">
                  <p>
                    D. Venkat Reddy oversees the operational execution of
                    projects at LA Infra.
                  </p>
                  <p>
                    With experience in project management and operational
                    coordination, he ensures that development activities are
                    carried out with discipline, efficiency, and attention to
                    quality.
                  </p>
                  <p>
                    His role focuses on site supervision, resource coordination,
                    and maintaining structured workflows to ensure smooth
                    project implementation.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* ADVISOR */}
            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-[14px] shadow-soft p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <p className="text-brand-500 uppercase tracking-wide text-xs mb-2">
                  Spiritual & Vastu Advisor
                </p>

                <h3 className="font-display text-xl text-forest mb-4">
                  Bramashree Prashanth Sharma
                </h3>

                <p className="text-forest font-medium mb-4 leading-relaxed">
                  Spiritual guide and Vastu advisor supporting balanced and
                  harmonious land development.
                </p>

                <div className="space-y-3 text-forest/70 text-sm leading-relaxed">
                  <p>
                    Bramashree Prashanth Sharma provides guidance to LA Infra
                    through his deep understanding of Vastu Shastra and
                    traditional knowledge systems.
                  </p>
                  <p>
                    His advisory role reflects the company’s belief that land
                    development can benefit from both modern planning and
                    traditional wisdom.
                  </p>
                  <p>
                    This guidance helps ensure developments emphasize harmony,
                    balance, and positive spatial orientation.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

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
              “Responsible land development means respecting both the investor
              and the land itself.”
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

      {/* COMMITMENT — CTA STYLE GRADIENT */}
      <section className="bg-gradient-hero noise-overlay relative overflow-hidden py-16 text-cream">
        {/* Soft spotlight glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

        {/* Floating decorative circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-brand-700/20 pointer-events-none"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-brand-700/20 pointer-events-none"
        />

        {/* Gold Particle Animation */}
        <GoldParticles />

        <div className="container-site relative z-10 max-w-4xl text-center">
          {/* Gold ornament divider */}
          <div className="flex items-center justify-center gap-6 mb-14">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-5xl mb-12 tracking-wide"
          >
            Our Commitment
          </motion.h2>

          {/* Leadership Closing Content */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="text-cream/80 leading-[2] text-lg md:text-xl"
          >
            At LA Infra, leadership is not only about development — it is about
            stewardship of land and responsibility toward the communities
            connected to it.
            <br />
            <br />
            Guided by shared values of integrity, transparency, and long-term
            thinking, the leadership team continues to shape developments that
            respect nature while creating meaningful land ownership
            opportunities.
          </motion.p>

          {/* Luxury signature line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="origin-center mx-auto mt-16 h-[1px] w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          />
        </div>
      </section>
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://lainfra.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Leadership",
      "item": "https://lainfra.com/leadership"
    }
  ]
}
`}
      </script>
    </>
  );
}

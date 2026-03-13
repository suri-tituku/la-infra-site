import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import GoldParticles from "../components/GoldParticles";
import chairmanImg from "../assets/images/leaders/kolli-sambireddy-chairman.jpg";
import mdImg from "../assets/images/leaders/k-dayakar-reddy-founder-and-managing-director.jpg";
import cofcfo from "../assets/images/leaders/mitra-co-founder-and-chief-financial-officer.jpg";
import directorImg from "../assets/images/leaders/anirudh-reddy-solipuram-director.jpg";
import sdiLogo from "../assets/images/partners/sdi-architecture.png";
import SectionReveal from "../components/SectionReveal";
import { useLocation } from "react-router-dom";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export default function Leadership() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(null);
  const [activeGroup, setActiveGroup] = useState("executive");

  useEffect(() => {
    if (active) {
      const el = document.querySelector(".premium-scroll");
      if (el) el.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);
  const leaderCards = [
    {
      id: "chairman",
      name: "Kolli Sambireddy",
      suffix: "(K. S. Reddy)",
      role: "Chairman",
      img: chairmanImg,
      quote:
        "Land rewards patience, discipline, and respect. Those who understand the land understand true value.",
      content: `Agriculture-rooted land strategist with decades of experience in land aggregation and responsible development.
      
      Born into an agricultural family, Kolli Sambireddy has been closely connected to farming and land stewardship for most of his life and has practiced organic farming for more than four decades.

Over the years, he has successfully aggregated over 5,000 acres of land and supported several prominent real estate developers across Telangana, Andhra Pradesh, and Karnataka.

Known for his strong work ethic, discipline, and commitment to ethical practices, he believes that sustainable success in land development is built through credibility, consistency, and responsible decision-making.

As Chairman of LA Infra, he provides strategic guidance to ensure that the company’s projects remain aligned with the principles of ethical land development and long-term value creation.`,
    },
    {
      id: "md",
      name: "K. Dayakar Reddy",
      suffix: "(B.A., LL.B.)",
      role: "Founder & Managing Director",
      img: mdImg,
      quote: "Trust is the true foundation of every land investment.",
      content: `Legal-driven real estate leader focused on transparency, due diligence, and ethical land development.

      K. Dayakar Reddy founded LA Infra with a clear commitment to bringing legal clarity and transparency into land development.

With a background in law, he specializes in real estate legal due diligence, ensuring that land transactions are supported by proper documentation and verified ownership.

Under his leadership, LA Infra focuses on developing secure farmland ventures, nature estates, and eco-driven retreat environments built on responsible planning and ethical practices.

He strongly believes that long-term success in real estate is built on honesty, accountability, and trust rather than speculative promises.`,
    },
    {
      id: "director",
      name: "Anirudh Reddy Solipuram",
      suffix: "(S.A.R., MS USA)",
      role: "Director",
      img: directorImg,
      quote:
        "True luxury in the future will be space, nature, and environments that restore human well-being.",
      content: `Eco-conscious entrepreneur bringing global sustainability insights to nature-aligned land development.

      Anirudh Reddy Solipuram brings a global perspective to sustainable development and responsible land use.

Holding a Master’s degree from the United States, he combines technical knowledge with a strong interest in ecology, organic farming, and sustainable architecture.

His international exposure across multiple countries has allowed him to study wellness retreats, eco-resorts, and nature-driven development models around the world.

Alongside his work in land development, he is actively engaged in the education sector, promoting nature-based learning environments and holistic educational initiatives.

At LA Infra, he contributes to the vision of creating developments that integrate nature, sustainability, and responsible land stewardship.`,
    },
    {
      id: "cfo",
      name: "Sanghamitra Reddy K",
      suffix: "(B.A., LL.B.)",
      role: "Co-Founder & CFO",
      img: cofcfo,
      quote:
        "Strong governance and financial discipline are the foundations of sustainable development.",
      content: `Financial strategist and legal professional guiding governance, compliance, and capital planning.
      
      Sanghamitra serves as the Co-Founder and Chief Financial Officer of LA Infra, contributing both legal expertise and financial leadership to the organization.

With a background in law, she plays an important role in overseeing financial strategy, capital planning, regulatory compliance, and investor relations.

Her work helps ensure that the company’s developments are supported by strong financial discipline and sound legal frameworks, enabling projects to remain sustainable and transparent.`,
    },
  ];

  const operationsAdvisory = [
    {
      id: "coo",
      name: "D. Venkat Reddy",
      role: "Chief Operating Officer",
      img: null,
      content: `Operations leader responsible for project execution and development efficiency.

He oversees operational execution across LA Infra projects ensuring discipline, efficiency, and quality standards.

His role focuses on site supervision, resource coordination, and structured workflows for seamless project implementation.`,
    },
    {
      id: "advisor",
      name: "Bramashree Prashanth Sharma",
      role: "Spiritual & Vastu Advisor",
      img: null,
      content: `Spiritual guide and Vastu advisor supporting harmonious land development.

He provides guidance through deep knowledge of Vastu Shastra and traditional systems.

His advisory ensures developments combine modern planning with traditional wisdom to create balanced and positive environments.`,
    },
  ];

  const architecturePartners = [
    {
      id: "sdi",
      name: "SDI Architecture",
      role: "Architecture & Design Partner",
      logo: sdiLogo,
      content: `SDI serves as the architectural and design partner for LA Infra developments.

The firm contributes expertise in master planning, sustainable architecture, and environmentally sensitive design approaches.

Their work focuses on creating developments that harmonize built spaces with natural landscapes, ensuring that each project maintains ecological balance while delivering thoughtful spatial planning and design excellence.`,
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

  const currentIndex = leaderCards.findIndex((l) => l.id === active?.id);

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % leaderCards.length;
    setActive(leaderCards[nextIndex]);
  };

  const goPrev = () => {
    const prevIndex =
      (currentIndex - 1 + leaderCards.length) % leaderCards.length;
    setActive(leaderCards[prevIndex]);
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

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the leadership team guiding LA Infra's ethical land development vision."
        url="https://thelainfra.com/leadership"
        breadcrumbs={[{ name: "Leadership", path: "/leadership" }]}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://thelainfra.com" },
          { name: "Leadership", url: "https://thelainfra.com/leadership" },
        ]}
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
          {(() => {
            const [expanded, setExpanded] = useState(false);
            return (
              <motion.div
                id="chairman" // ✅ ADD THIS
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="grid md:grid-cols-2 gap-20 items-start"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-sm shadow-md">
                  {/* Image */}
                  <div className="relative rounded-[18px] overflow-hidden shadow-2xl">
                    <img
                      src={chairmanImg}
                      alt="Kolli Sambireddy"
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-brand-700 uppercase tracking-[0.3em] text-xl mb-4">
                    Chairman’s Message
                  </p>

                  <div className="relative">
                    <motion.div
                      initial={false}
                      animate={{ height: expanded ? "auto" : 400 }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 text-lg leading-[2] text-forest/80">
                        <p>
                          Land has always been more than a resource — it is the
                          foundation upon which livelihoods, communities, and
                          generations are built.
                        </p>
                        <p>
                          Having grown up in an agricultural family and spent
                          decades working closely with the land, I have come to
                          deeply respect its value and responsibility. For over
                          forty years, my journey in agriculture and land
                          development has taught me that true success with land
                          comes from patience, discipline, and integrity.
                        </p>
                        <p>
                          At LA Infra, we believe that land should be developed
                          thoughtfully and responsibly. Every project we
                          undertake is guided by the principle that development
                          must respect the land, protect the interests of
                          investors, and contribute positively to the
                          surrounding environment and communities.
                        </p>
                        <p>
                          Over the years, we have had the opportunity to
                          aggregate and work with thousands of acres of land
                          across multiple regions. This experience has
                          strengthened our commitment to ensuring that every
                          development stands on legal clarity, ethical
                          practices, and long-term value.
                        </p>
                        <p>
                          Our goal is not simply to develop land, but to create
                          opportunities that benefit both present and future
                          generations. By combining agricultural wisdom with
                          responsible development practices, LA Infra continues
                          to move forward with a clear focus on trust,
                          sustainability, and lasting value.
                        </p>
                      </div>
                    </motion.div>

                    {!expanded && (
                      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
                    )}
                  </div>

                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-6 flex items-center gap-2 text-brand-700 font-semibold tracking-wide hover:text-brand-900 transition"
                  >
                    {expanded ? "Read Less" : "Read More"}
                    {expanded ? "▲" : "▼"}
                  </button>

                  <div className="mt-12">
                    <p className="font-display text-2xl text-forest">
                      Kolli Sambireddy
                    </p>
                    <p className="text-brand-600">Chairman, LA Infra</p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

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
          {(() => {
            const [expanded, setExpanded] = useState(false);
            return (
              <motion.div
                id="md" // ✅ ADD
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="grid md:grid-cols-2 gap-20 items-start"
              >
                {/* Content */}
                <div className="order-2 md:order-1">
                  <p className="text-brand-700 uppercase tracking-[0.3em] text-xl mb-4">
                    Founder’s Message
                  </p>

                  <div className="relative">
                    <motion.div
                      initial={false}
                      animate={{ height: expanded ? "auto" : 400 }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 text-lg leading-[2] text-forest/80">
                        <p>
                          At LA Infra, our journey is built on a simple but
                          powerful belief — land development must be guided by
                          integrity, responsibility, and long-term vision.
                        </p>
                        <p>
                          For many people, land represents more than an
                          investment. It represents security, opportunity, and a
                          legacy that can be passed on to future generations.
                          Recognizing this responsibility, we established LA
                          Infra with a commitment to approach land development
                          with legal clarity, ethical practices, and disciplined
                          planning.
                        </p>
                        <p>
                          In an industry often driven by speculation and
                          short-term gains, our philosophy is different. We
                          believe that real value is created when development
                          respects the land, protects the interests of
                          investors, and contributes positively to the
                          communities around it.
                        </p>
                        <p>
                          Every project undertaken by LA Infra reflects our core
                          principles — secure land ownership, responsible
                          development, ecological awareness, and transparent
                          processes. These values guide every decision we make
                          and define the foundation upon which the organization
                          continues to grow.
                        </p>
                        <p>
                          Our vision is not only to develop land, but to build a
                          trusted ecosystem where investors, communities, and
                          nature coexist in a balanced and sustainable manner.
                        </p>
                        <p>
                          As we move forward, our commitment remains clear: to
                          create developments that stand on trust,
                          responsibility, and long-term value for generations to
                          come.
                        </p>
                      </div>
                    </motion.div>

                    {!expanded && (
                      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
                    )}
                  </div>

                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-6 flex items-center gap-2 text-brand-700 font-semibold tracking-wide hover:text-brand-900 transition"
                  >
                    {expanded ? "Read Less" : "Read More"}
                    {expanded ? "▲" : "▼"}
                  </button>

                  <div className="mt-12">
                    <p className="font-display text-2xl text-forest">
                      K. Dayakar Reddy
                    </p>
                    <p className="text-brand-600">
                      Founder & Managing Director, LA Infra
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
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* ================= LEADERSHIP GRID (SOBHA STYLE) ================= */}
      <section className="py-20 bg-cream bg-gradient-to-b from-[#f3efe7] to-[#eae4d8] overflow-hidden">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="section-heading">OUR LEADERSHIP</h2>
            {/* <h2 className="section-heading">
                Operational & Advisory Leadership
              </h2> */}
            {/* ===== Gold Ornament Divider ===== */}
            <div className="flex items-center justify-center gap-6 my-10">
              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 border border-amber-400" />
                <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
              </div>

              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </div>
        </SectionReveal>
        <div className="container-site max-w-7xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-16">
            {leaderCards.map((leader, i) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center cursor-pointer group"
                onClick={() => setActive(leader)}
              >
                <div className="relative overflow-hidden rounded-[5px] shadow-md group">
                  {leader.img ? (
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[0.97]"
                    />
                  ) : (
                    <div className="w-full h-[360px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-sm tracking-[0.3em] uppercase">
                        No Image Available
                      </span>
                    </div>
                  )}
                </div>
                {/* Name */}
                <h3 className="mt-6 text-[18px] tracking-wide text-forest font-medium uppercase leading-snug">
                  {leader.name}
                  {leader.suffix && (
                    <span className="block text-[14px] tracking-[0.25em] text-forest font-bold mt-1">
                      {leader.suffix}
                    </span>
                  )}
                </h3>

                {/* Role */}
                <p className="text-[14px]  font-medium tracking-[0.25em] text-forest/70 mt-2 uppercase">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative bg-white max-w-7xl w-full rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto md:overflow-hidden group"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow flex items-center justify-center hover:scale-110 transition"
              >
                ✕
              </button>

              <button
                onClick={goPrev}
                className="absolute left-4 top-1/3 -translate-y-1/3 z-30
  w-10 h-10 flex items-center justify-center
  rounded-full bg-white/40 shadow-lg
  text-forest text-2xl

  opacity-100 md:opacity-0 md:group-hover:opacity-100
  transition-all duration-300

  hover:bg-white hover:scale-110"
              >
                ‹
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 top-1/3 -translate-y-1/3 z-30
  w-10 h-10 flex items-center justify-center
  rounded-full bg-white/40 shadow-lg
  text-forest text-2xl

  opacity-100 md:opacity-0 md:group-hover:opacity-100
  transition-all duration-300

  hover:bg-white hover:scale-110"
              >
                ›
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* IMAGE */}
                <div className="overflow-hidden bg-black">
                  {active.img ? (
                    <img
                      src={active.img}
                      alt={active.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[520px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-sm tracking-[0.4em] uppercase">
                        No Image Available
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col h-full">
                  {/* STICKY HEADER */}
                  <div className="sticky top-0 bg-white z-10 p-4 pb-0 border-b">
                    <h2 className="font-display text-3xl text-forest">
                      {active.name}
                    </h2>
                    <p className="text-brand-600 tracking-widest uppercase text-sm mt-2">
                      {active.role}
                    </p>
                  </div>

                  {/* SCROLLABLE CONTENT */}
                  <div className="p-4 overflow-y-auto premium-scroll md:h-full h-[60vh]">
                    {/* LEADER BIO */}
                    <div className="text-forest/70 text-sm whitespace-pre-line leading-relaxed">
                      {active.content}
                    </div>

                    {/* LEADER QUOTE */}
                    {active?.quote?.trim() && (
                      <div className="mt-4 text-center">
                        <div className="flex items-center justify-center gap-6 mb-2">
                          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                          <div className="w-2 h-2 rotate-45 border border-amber-400" />
                          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                        </div>

                        <blockquote className="font-display text-xl md:text-1xl text-forest italic leading-[1.1]">
                          “{active.quote}”
                        </blockquote>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ARCHITECTURE & DESIGN PARTNER ================= */}
      <section className="py-16 bg-cream">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="section-heading">ARCHITECTURE & DESIGN PARTNER</h2>

            <div className="flex items-center justify-center gap-6 my-10">
              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 border border-amber-400" />
                <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
              </div>

              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </div>
        </SectionReveal>

        <div className="container-site max-w-2xl">
          {architecturePartners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-amber-200 shadow-lg"
            >
              <div className="relative bg-black py-20 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cross-scratches.png')]"
                  animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <a
                  href="https://www.sdi.archi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit Partner Website"
                  className="relative z-10 cursor-pointer"
                >
                  <motion.img
                    src={partner.logo}
                    alt="SDI Architecture"
                    className="h-28 md:h-32 w-auto object-contain drop-shadow-xl"
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OPERATIONS & ADVISORY ================= */}
      <section className="py-16  bg-white/70">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="section-heading">OPERATIONS & ADVISORY</h2>

            <div className="flex items-center justify-center gap-6 my-10">
              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 border border-amber-400" />
                <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
              </div>

              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </div>
        </SectionReveal>

        <div className="container-site max-w-8xl">
          <div className="grid md:grid-cols-2 gap-12">
            {operationsAdvisory.map((leader, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                }}
                transition={{ duration: 0.6 }}
                key={leader.id}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-amber-100 p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                {/* Role */}
                <p className="text-xs tracking-[0.35em] text-amber-700 uppercase mb-4">
                  {leader.role}
                </p>

                {/* Name */}
                <h3 className="font-display text-2xl text-forest mb-6">
                  {leader.name}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                  <div className="w-2 h-2 rotate-45 bg-amber-400" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                </div>

                {/* Content */}
                <p className="text-forest/70 leading-relaxed whitespace-pre-line text-sm">
                  {leader.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gold Ornament Divider ===== */}
      {/* <div className="flex items-center justify-center gap-6 my-5">
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 rotate-45 border border-amber-400" />
          <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400" />
        </div>

        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div> */}
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
      "item": "https://www.thelainfra.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Leadership",
      "item": "https://www.thelainfra.com/leadership"
    }
  ]
}
`}
      </script>
    </>
  );
}

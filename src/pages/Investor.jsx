import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import GoldParticles from "../components/GoldParticles";

/* Scroll Animation */
const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const SectionReveal = ({ children }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.div>
);

const investorStrengths = [
  {
    icon: "🌾",
    title: "Strong Agricultural Heritage",
    body: "A deep connection to agriculture that influences our responsible land development philosophy.",
  },
  {
    icon: "⚖️",
    title: "Legal Expertise in Land Transactions",
    body: "Extensive experience in verifying ownership records, documentation, and regulatory compliance.",
  },
  {
    icon: "📄",
    title: "Transparent Documentation Processes",
    body: "Clear communication and structured documentation that ensures investor confidence.",
  },
  {
    icon: "🌱",
    title: "Sustainability-Driven Planning",
    body: "Development strategies that respect natural landscapes and environmental balance.",
  },
  {
    icon: "🏛",
    title: "Long-Term Development Philosophy",
    body: "A disciplined approach focused on creating land assets that retain value for generations.",
  },
];

const investmentPoints = [
  {
    icon: "🔐",
    title: "Secure Land Ownership",
    body: "Land assets supported by clear ownership documentation and legal verification.",
  },
  {
    icon: "📐",
    title: "Responsible Land Planning",
    body: "Thoughtful planning that respects environmental balance and long-term usability.",
  },
  {
    icon: "🌿",
    title: "Nature-Oriented Environments",
    body: "Developments designed to maintain natural landscapes and ecological harmony.",
  },
  {
    icon: "🏗",
    title: "Disciplined Development Practices",
    body: "Structured development processes that ensure sustainable long-term value.",
  },
];

export default function Investor() {
  return (
    <>
      <SEO
        title="Farmland Investment Opportunities Near Hyderabad | LA Infra"
        description="Explore ethical farmland investment opportunities with LA Infra — secure land ownership, clear-title developments, and estate projects across Telangana, Andhra Pradesh, and Karnataka."
        url="https://thelainfra.com/investor"
        breadcrumbs={[{ name: "Investor", path: "/investor" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "LA Infra Farmland Investment",
          url: "https://thelainfra.com/investor",
          description:
            "Ethical farmland investment and land development opportunities near Hyderabad across Telangana, Andhra Pradesh, and Karnataka.",
          provider: {
            "@type": "Organization",
            name: "LA Infra",
            url: "https://thelainfra.com",
          },
          areaServed: ["Telangana", "Andhra Pradesh", "Karnataka"],
          serviceType: "Farmland Investment",
        }}
      />

      {/* HERO */}
      <section className="relative bg-forest pt-28 pb-14 text-cream overflow-hidden">
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
                <Link
                  to="/"
                  className="text-cream/40 hover:text-brand-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li className="text-cream/20">/</li>

              <li className="text-cream/80 font-medium">Investor</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-display-lg mb-6"
          >
            Investor
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cream/70 max-w-2xl leading-relaxed"
          >
            Building Confidence in Land Ownership
          </motion.p>

          <section className="py-6 max-w-4xl">
            <SectionReveal>
              <p className="mb-6 leading-relaxed text-cream/70">
                Farmland has long been regarded as one of the most stable and
                enduring forms of long-term investment. However, responsible
                land ownership requires clarity, transparency, and careful
                planning.
              </p>

              <p className="mb-6 leading-relaxed text-cream/70">
                At LA Infra, we understand that investors seek more than just
                opportunities — they seek security, trust, and long-term value.
              </p>

              <p className="leading-relaxed text-cream/70">
                Our approach to land development is built on strong principles
                of legal due diligence, ethical practices, and disciplined
                planning, ensuring that every project offers a clear and
                responsible investment environment.
              </p>
            </SectionReveal>
          </section>
        </div>
      </section>

      <main className="bg-cream text-forest">
        {/* LEGAL CLARITY */}
        <section className="bg-[#f5f1e8] py-10">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">Legal Clarity</h2>

              <p className="mb-6 leading-relaxed">
                Legal security is one of the most important factors in land
                ownership.
              </p>

              <p className="leading-relaxed">
                Every project developed by LA Infra undergoes careful legal
                verification to ensure that ownership records, documentation,
                and regulatory compliance are properly examined.
              </p>

              <p className="leading-relaxed">
                This process helps ensure that investors receive land assets
                supported by clear documentation and responsible due diligence.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="container-site py-10 max-w-4xl">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">
              Transparent Processes
            </h2>

            <p className="mb-6 leading-relaxed">
              Transparency forms the foundation of our relationship with
              investors.
            </p>

            <p className="leading-relaxed">
              From the initial project presentation to the final documentation,
              LA Infra maintains clear communication and structured processes
              that allow investors to make informed decisions with confidence.
            </p>

            <p className="leading-relaxed">
              Our goal is to create an investment environment built on openness,
              integrity, and accountability.
            </p>
          </SectionReveal>
        </section>

        {/* RESPONSIBLE DEVELOPMENT */}
        <section className="bg-[#f5f1e8] py-10">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">
                Responsible Development
              </h2>

              <p className="mb-6 leading-relaxed">
                Land development must be approached with long-term
                responsibility.
              </p>

              <p className="leading-relaxed">
                At LA Infra, projects are planned with careful consideration for
                environmental balance, accessibility, and future usability. This
                ensures that developments remain meaningful and valuable over
                time.
              </p>

              <p className="leading-relaxed">
                Responsible planning helps protect the long-term integrity of
                the land asset
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* LONG TERM VALUE */}
        <section className="container-site py-10 max-w-4xl">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">Long-Term Value</h2>

            <p className="mb-6 leading-relaxed">
              Unlike speculative real estate models, LA Infra focuses on
              developments designed to provide stable and sustainable long-term
              value.
            </p>

            <p className="mb-6 leading-relaxed">Our projects emphasize:</p>

            <div className="relative space-y-14 mb-8">
              {/* vertical line */}
              <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

              {investmentPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative pl-24 group"
                >
                  {/* icon */}
                  <div
                    className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-xl group-hover:scale-110 transition"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>

                  {/* card */}
                  <div className="bg-white/70 backdrop-blur-sm border border-brand-100 p-10 rounded-[5px] shadow-soft group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-display text-2xl text-forest mb-4">
                      {item.title}
                    </h3>

                    <p className="text-forest/70 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="leading-relaxed">
              These elements contribute to land assets that can serve investors
              and families for generations.
            </p>
          </SectionReveal>
        </section>

        {/* WHY INVESTORS CHOOSE */}
        <section className="bg-[#f5f1e8] py-10">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">
                Why Investors Choose LA Infra
              </h2>

              <p className="mb-6 leading-relaxed">
                Investors partner with LA Infra because of our commitment to
                responsible development and ethical practices.
              </p>

              <p className="mb-6 leading-relaxed">Key strengths include:</p>

              <div className="relative space-y-14 mb-8">
                {/* vertical line */}
                <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

                {investorStrengths.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="relative pl-24 group"
                  >
                    {/* icon */}
                    <div
                      className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-xl group-hover:scale-110 transition"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    {/* card */}
                    <div className="bg-white/70 backdrop-blur-sm border border-brand-100 p-10 rounded-[5px] shadow-soft group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <h3 className="font-display text-2xl text-forest mb-4">
                        {item.title}
                      </h3>

                      <p className="text-forest/70 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
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
                “Our goal is not simply to develop land, but to create
                landowners who think for generations.”
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
            <div className="flex items-center justify-center gap-6 mb-12">
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
              Our Commitment to Investors
            </motion.h2>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="text-cream/80 leading-[2] text-lg md:text-xl"
            >
              At LA Infra, we believe that true success in land development is
              built on trust and accountability.
              <br />
              <br />
              By maintaining high standards of legal clarity, responsible
              planning, and transparent communication, we aim to create land
              developments that provide both security and meaningful long-term
              value.
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
      </main>
    </>
  );
}

import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GoldParticles from "../components/GoldParticles";
import { Leaf, Sprout, Trees } from "lucide-react";
export default function About() {
  const items = [
    {
      icon: <Sprout size={18} />,
      title: "Farmland Stewardship Projects",
      body: "Secure agricultural land developments designed for responsible land ownership and long-term sustainability.",
    },
    {
      icon: <Leaf size={18} />,
      title: "Nature Estate Communities",
      body: "Low-density land developments that combine natural landscapes with thoughtful planning.",
    },
    {
      icon: <Trees size={18} />,
      title: "Eco Retreat Destinations",
      body: "Nature-oriented environments designed for wellness, relaxation, and connection with nature.",
    },
  ];

  return (
    <>
      <SEO
        title="About LA Infra – Ethical Farmland & Land Development Company"
        description="Learn about LA Infra, a Hyderabad-based ethical land development company specializing in farmland investments, nature estate communities, and eco-retreat projects across Telangana, Andhra Pradesh, and Karnataka."
        url="https://thelainfra.com/about-us"
        breadcrumbs={[{ name: "About Us", path: "/about-us" }]}
      />
      {/* HERO */}
      <section className="relative bg-forest pt-28 pb-12 text-cream overflow-hidden">
        <GoldParticles />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/90" />

        <div className="container-site relative z-10">
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
              <li className="text-cream/80 font-medium">About</li>
            </ol>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-display-lg mb-6"
          >
            About LA Infra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cream/70 max-w-2xl leading-relaxed"
          >
            LA Infra is a values-driven land development company focused on
            creating responsibly planned farmland ventures, nature estate
            communities, and eco-driven retreat environments.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 bg-cream">
        <div className="container-site grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-heading mb-6">
              A Company Built on Conscience
            </h2>
            <div className="space-y-5 text-forest/70 leading-relaxed">
              <p>
                Built on strong foundations of integrity, legal clarity, and
                environmental responsibility, LA Infra approaches land as a
                long-term asset developed with discipline and respect for
                nature.
              </p>
              <p>
                With deep roots in agriculture and extensive experience in land
                aggregation, legal due diligence, and sustainable development,
                we create land assets combining secure ownership, thoughtful
                planning, and lasting value.
              </p>
              <p>
                Rather than speculative real estate practices, LA Infra
                emphasizes transparent processes, responsible land use, and
                long-term stewardship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-forest text-cream p-10 rounded-[5px] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500">
              <h3 className="font-display text-2xl text-amber-300  mb-6">
                Our Philosophy
              </h3>
              <p className="italic text-cream/70 mb-6">
                Land is not merely a commodity. It is a natural resource that
                must be handled with responsibility, respect, and long-term
                vision.
              </p>
              <ul className="space-y-3 text-cream/70">
                {[
                  "Agricultural heritage",
                  "Legal expertise in land transactions",
                  "Sustainability-driven planning",
                  "Ethical business practices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION — RICH PREMIUM THEME */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#f3efe7] to-[#eae4d8]">
        {/* soft luxury texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        <div className="container-site relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-5xl text-forest">
              Vision & Mission
            </h2>

            <div className="flex justify-center mt-6">
              <div className="h-[2px] w-44 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="group relative"
            >
              {/* glow border */}
              <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-amber-200/30 via-transparent to-amber-200/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

              <div className="relative bg-gradient-to-br rounded-[5px] from-[#163a2d] to-[#0f2c22] text-cream p-12 shadow-[0_25px_70px_rgba(0,0,0,0.25)] group-hover:-translate-y-2 group-hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500">
                {/* gold accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <h3 className="font-display text-2xl text-amber-300 mb-6 tracking-wide">
                  Our Vision
                </h3>

                <p className="text-cream/75 leading-[1.9] text-lg">
                  To become a trusted benchmark in ethical land development
                  creating sustainable land assets benefiting investors,
                  communities, and future generations.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-amber-200/30 via-transparent to-amber-200/30 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

              <div className="relative bg-gradient-to-br rounded-[5px] from-[#163a2d] to-[#0f2c22] text-cream p-12 shadow-[0_25px_70px_rgba(0,0,0,0.25)] group-hover:-translate-y-2 group-hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <h3 className="font-display text-2xl text-amber-300 mb-6 tracking-wide">
                  Our Mission
                </h3>

                <p className="text-cream/75 leading-[1.9] text-lg">
                  To develop farmland, nature estates, and eco-retreat
                  environments through responsible planning, legal transparency,
                  and environmentally conscious practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="relative py-16 bg-cream overflow-hidden">
        <div className="container-site relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <span className="section-label mb-4 block tracking-[0.35em]">
              WHAT WE DO
            </span>
            <h2 className="font-display text-5xl text-forest">
              Responsible Land Development
            </h2>
            <div className="flex justify-center mt-10">
              <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </motion.div>

          <p className="text-xl text-forest/80 font-semibold mb-16">
            LA Infra focuses on three key development areas:
          </p>

          <div className="relative space-y-14">
            <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative pl-24 group"
              >
                <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-brand-400 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-brand-100 p-10 rounded-[5px] shadow-soft group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display text-2xl text-forest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-forest/70 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
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
              “Real estate should be built on clarity, responsibility, and trust
              not speculation.”
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
            Our Commitment
          </motion.h2>

          {/* Content */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="text-cream/80 leading-[2] text-lg md:text-xl"
          >
            Every development undertaken by LA Infra is guided by the belief
            that true value lies not only in land ownership but in responsible
            stewardship of the land itself.
            <br />
            <br />
            Through ethical practices, transparent operations, and sustainable
            planning, LA Infra continues to build projects that respect nature
            while creating lasting opportunities for landowners and communities.
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
    </>
  );
}

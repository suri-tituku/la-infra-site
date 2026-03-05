import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionReveal from '../components/SectionReveal'
import FeatureCard from '../components/FeatureCard'
import LeadershipCard from '../components/LeadershipCard'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'

const trustPillars = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
    title: 'Legal Due Diligence',
    body: 'Every project undergoes rigorous legal scrutiny ensuring clear ownership, compliance, and risk-free transactions.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
    title: 'Transparency by Design',
    body: 'From documentation to communication, our processes empower customers with complete clarity and confidence.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>,
    title: 'Nature-Respectful',
    body: 'Projects are planned to coexist with the land, preserving ecological balance while enhancing long-term value.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
    title: 'Disciplined Growth',
    body: 'Steady, responsible expansion—without shortcuts, speculation, or pressure. Real value over time.',
  },
]

const leaders = [
  {
    name: 'Kolli Sambireddy',
    suffix: 'K. S. Reddy',
    title: 'Chairman',
    bio: 'Over four decades of hands-on organic farming experience and 35+ years leading real estate across Telangana, AP & Karnataka. Successfully aggregated 5,000+ acres.',
    highlights: [
      'Clear-title, secure investment delivery',
      'Ethical leadership & realistic pricing',
      'Long-term asset appreciation focus',
    ],
  },
  {
    name: 'K. Dayakar Reddy',
    suffix: 'B.A., LL.B.',
    title: 'Founder & Managing Director',
    bio: 'Leads LA Infra with an unwavering commitment to legal clarity, integrity, and transparency. Specializes in end-to-end legal due diligence and litigation-free transactions.',
    highlights: [
      'End-to-end legal due diligence',
      'Clear-title verification specialist',
      'Ethical win-win-win growth model',
    ],
  },
  {
    name: 'Solipuram Anirudh Reddy',
    suffix: 'S.A.R., MS USA',
    title: 'Director',
    bio: 'Eco-conscious entrepreneur with global perspective on sustainable development. Studied wellness retreats and eco-sensitive models in 30+ countries.',
    highlights: [
      'Eco-sensitive real estate design',
      'Nature-based development models',
      'Founder, Aranya – The Nature School',
    ],
  },
  {
    name: 'Mitra',
    suffix: 'BA LLB',
    title: 'CFO & Co-Founder',
    bio: 'Combines legal insight with financial discipline to deliver legally secure and financially viable real estate developments.',
    highlights: [
      'Infrastructure project structuring',
      'Financial planning & capital management',
      'Regulatory compliance & risk management',
    ],
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="LA Infra – Ethical Real Estate & Land Development in Telangana"
        description="LA Infra is a value-driven real estate organization specializing in farmland ventures, garden lands, estate developments, and eco-getaway projects across Telangana and Andhra Pradesh."
        url="https://lainfra.com"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero noise-overlay overflow-hidden" aria-label="Hero">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] max-w-lg rounded-full bg-brand-700/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] max-w-md rounded-full bg-brand-900/20 blur-2xl" />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[10,20,30,40,50,60,70,80,90].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#74b357" strokeWidth="0.2"/>
            ))}
            {[10,20,30,40,50,60,70,80,90].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#74b357" strokeWidth="0.2"/>
            ))}
          </svg>
        </div>

        <div className="container-site relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-label text-brand-400 mb-6 block">Telangana · Andhra Pradesh · Karnataka</span>
            </motion.div>

            <motion.h1
              className="font-display text-display-xl text-cream mb-6 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Ethical Real Estate.
              <br />
              <em className="text-brand-300 not-italic">Sustainable Growth.</em>
              <br />
              Trusted Legacy.
            </motion.h1>

            <motion.p
              className="text-cream/65 font-body text-lg max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Secure farmland and nature-inspired developments built on transparency, legal clarity, and long-term value creation across generations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link to="/about-us" className="btn-primary">Discover LA Infra</Link>
              <Link to="/contact" className="btn-outline-white">Get in Touch</Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-14 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {['Clear Title Properties', 'Legal Due Diligence', 'Ethical Development', 'Nature Aligned'].map(b => (
                <span key={b} className="flex items-center gap-2 text-cream/50 text-xs font-body tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-brand-400" />
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="text-cream/30 text-xs tracking-widest uppercase font-body">Scroll</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-brand-400/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── TRUST PILLARS ── */}
      <section className="py-24 bg-cream" aria-labelledby="trust-heading">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">What Sets Us Apart</span>
              <h2 id="trust-heading" className="section-heading">Built on Four Pillars of Trust</h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((p, i) => (
              <FeatureCard key={i} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-gradient-earth" aria-labelledby="who-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="section-label mb-4 block">Who We Are</span>
              <h2 id="who-heading" className="section-heading mb-6">
                Land is not a commodity.<br />
                <em className="text-brand-600 not-italic">It is a responsibility.</em>
              </h2>
              <p className="text-forest/70 font-body leading-relaxed mb-6">
                LA Infra is a value-driven real estate and land development organization specializing in farmland ventures, garden lands, estate developments, and nature-inspired getaway projects.
              </p>
              <p className="text-forest/70 font-body leading-relaxed mb-8">
                Our work is guided by a strong commitment to legal clarity, ethical practices, and long-term sustainability. We consciously avoid exaggerated claims, speculative promises, and short-term gains.
              </p>
              <Link to="/about-us" className="btn-secondary">Our Story</Link>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Farmland Ventures', icon: '🌾' },
                  { label: 'Garden Lands',       icon: '🌿' },
                  { label: 'Estate Developments', icon: '🏡' },
                  { label: 'Eco Getaways',        icon: '🌳' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-sm border border-brand-100 shadow-soft text-center group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="font-display text-base font-semibold text-forest">{item.label}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP HIGHLIGHTS ── */}
      <section className="py-24 bg-cream" aria-labelledby="leadership-heading">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">Our Leadership</span>
              <h2 id="leadership-heading" className="section-heading">Guided by Experience &amp; Integrity</h2>
              <p className="text-forest/60 font-body mt-4 max-w-xl mx-auto">
                Decades of combined expertise in real estate, law, sustainable development, and organic agriculture.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((l, i) => (
              <LeadershipCard key={i} {...l} delay={i * 0.1} />
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/about-us" className="btn-secondary">Full Leadership Profiles</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to Invest in Ethical Land Development?"
        sub="Connect with our team to explore clear-title farmland, estate, and eco-development opportunities across Telangana and Andhra Pradesh."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="Our Mission"
        secondaryTo="/mission-vision"
      />
    </>
  )
}

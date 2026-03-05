import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionReveal from '../components/SectionReveal'
import CTABanner from '../components/CTABanner'

const missionPoints = [
  'Develop clear-title, legally secure real estate assets built on absolute transparency and ethical practices.',
  'Create sustainable farmland, eco-sensitive developments, and nature-driven getaway resorts that respect the environment.',
  'Integrate organic principles, wellness, and responsible design into every project we undertake.',
  'Generate rural employment and community development through socially accountable business models.',
  'Deliver long-term value to customers and investors without speculation, misrepresentation, or false promises.',
]

const principles = [
  {
    title: 'Integrity Above All',
    body: 'Every decision, transaction, and communication is held to the highest standard of moral and professional integrity.',
    icon: '⚖️',
  },
  {
    title: 'Legal Transparency',
    body: 'All land assets are thoroughly verified with clear documentation, ensuring customers can invest with total confidence.',
    icon: '📋',
  },
  {
    title: 'Ecological Responsibility',
    body: 'Developments respect the natural contours of the land, preserving biodiversity and ecological balance.',
    icon: '🌿',
  },
  {
    title: 'Community First',
    body: 'We support rural livelihoods, encourage local employment, and contribute to the social fabric of communities.',
    icon: '🤝',
  },
  {
    title: 'No False Promises',
    body: 'We operate without exaggerated claims or speculative return projections—only honest, realistic assessments.',
    icon: '✅',
  },
  {
    title: 'Generational Value',
    body: 'Assets are built to grow and serve future generations, not just immediate financial returns.',
    icon: '🌱',
  },
]

export default function Mission() {
  return (
    <>
      <SEO
        title="Mission & Vision – LA Infra Ethical Real Estate"
        description="LA Infra's mission: ethical farmland development, legal transparency, ecological responsibility, and long-term value. Learn about our vision for sustainable real estate in Telangana."
        url="https://lainfra.com/mission-vision"
        breadcrumbs={[{ name: 'Mission & Vision', path: '/mission-vision' }]}
      />

      {/* Hero */}
      <section className="bg-forest pt-32 pb-20 relative overflow-hidden" aria-label="Mission page header">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-400 blur-3xl" />
        </div>
        <div className="container-site relative z-10">
          <SectionReveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-cream/40 font-body">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
                <li className="text-cream/20">/</li>
                <li className="text-cream/60">Mission & Vision</li>
              </ol>
            </nav>
            <span className="section-label text-brand-400 mb-4 block">Purpose & Direction</span>
            <h1 className="font-display text-display-lg text-cream mb-5">Mission &amp; Vision</h1>
            <p className="text-cream/60 font-body max-w-xl leading-relaxed">
              Guided by ethics, driven by purpose, and committed to creating lasting value for people and the planet.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-cream" aria-labelledby="vision-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="section-label mb-4 block">Our Vision</span>
              <h2 id="vision-heading" className="section-heading mb-6">
                The Most Trusted Name in
                <em className="text-brand-600 not-italic block">Ethical Real Estate</em>
              </h2>
              <p className="text-forest/70 font-body leading-relaxed mb-6">
                To become the most trusted name in ethical real estate, creating secure, sustainable, and nature-aligned developments that preserve land integrity, empower communities, and deliver lasting value across generations.
              </p>
              <p className="text-forest/70 font-body leading-relaxed">
                We envision a future where farmland, living spaces, and getaway destinations coexist in harmony with nature—driven by transparency, legal clarity, and responsible growth.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-hero rounded-sm p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-400 blur-2xl" />
                  </div>
                  <div className="relative z-10">
                    <div className="font-display text-5xl text-brand-300 mb-2 italic">"</div>
                    <p className="font-display text-xl text-cream/90 leading-relaxed italic">
                      Where farmland, living spaces, and getaway destinations coexist in harmony with nature.
                    </p>
                    <div className="mt-6 w-12 h-[1px] bg-brand-500 mx-auto" />
                    <p className="font-body text-xs text-brand-400 tracking-widest uppercase mt-4">LA Infra Vision Statement</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-earth" aria-labelledby="mission-heading">
        <div className="container-site">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="section-label mb-3 block">Our Mission</span>
              <h2 id="mission-heading" className="section-heading">What We Are Committed To</h2>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {missionPoints.map((point, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5 bg-white p-6 border border-brand-100 rounded-sm shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-body font-bold text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-forest/75 font-body leading-relaxed">{point}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical principles */}
      <section className="py-24 bg-forest" aria-labelledby="principles-heading">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label text-brand-400 mb-3 block">Core Values</span>
              <h2 id="principles-heading" className="font-display text-display-md text-cream">Our Ethical Principles</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-brand-900/40 border border-brand-800/50 rounded-sm p-7 hover:bg-brand-900/60 hover:border-brand-700/60 transition-all duration-300 group">
                  <div className="text-2xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-2">{p.title}</h3>
                  <p className="text-cream/55 text-sm font-body leading-relaxed">{p.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Invest in a Purposeful Future"
        sub="Align your investment with ethical, sustainable, and long-term value creation. Connect with LA Infra today."
        primaryLabel="Talk to Our Team"
        primaryTo="/contact"
        secondaryLabel="View Our Clients"
        secondaryTo="/clients"
      />
    </>
  )
}

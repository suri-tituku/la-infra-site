import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionReveal from '../components/SectionReveal'
import CTABanner from '../components/CTABanner'

const clients = [
  { name: 'Haripriya Developers', sector: 'Real Estate Development', note: 'Land aggregation & project support' },
  { name: 'MRF Tyre Ltd', sector: 'Industrial / Manufacturing', note: 'Land acquisition partnership' },
  { name: 'Ganapathi Sugar Company', sector: 'Agro-Industrial', note: 'Farmland development collaboration' },
  { name: 'Sirivanam Infra Pvt Ltd', sector: 'Infrastructure Development', note: 'Real estate project support' },
  { name: 'SSL Infra and Developers', sector: 'Real Estate', note: 'Land sourcing & development' },
  { name: 'Kashetti Township', sector: 'Township Development', note: 'Sadashivpet township project' },
  { name: 'Teachers Colony', sector: 'Residential Development', note: 'Sangareddy housing project' },
  { name: 'Livin Homes', sector: 'Residential Real Estate', note: 'Residential development collaboration' },
]

const sectors = [
  { label: 'Real Estate Developers', count: '10+', icon: '🏗️' },
  { label: 'Industrial Corporates', count: '5+', icon: '🏭' },
  { label: 'Township Projects', count: '3+', icon: '🏘️' },
  { label: 'High-Net-Worth Individuals', count: 'Many', icon: '👤' },
]

export default function Clients() {
  return (
    <>
      <SEO
        title="Our Clients – LA Infra Real Estate Collaborations"
        description="LA Infra has supported leading real estate developers, industrial corporates, and township projects across Telangana and Andhra Pradesh. Trusted by Haripriya Developers, MRF Tyre, and more."
        url="https://lainfra.com/clients"
        breadcrumbs={[{ name: 'Clients', path: '/clients' }]}
      />

      {/* Hero */}
      <section className="bg-forest pt-32 pb-20 relative overflow-hidden" aria-label="Clients page header">
        <div className="container-site relative z-10">
          <SectionReveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-cream/40 font-body">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
                <li className="text-cream/20">/</li>
                <li className="text-cream/60">Our Clients</li>
              </ol>
            </nav>
            <span className="section-label text-brand-400 mb-4 block">Trusted Partnerships</span>
            <h1 className="font-display text-display-lg text-cream mb-5">Our Clients</h1>
            <p className="text-cream/60 font-body max-w-xl leading-relaxed">
              LA Infra has built enduring relationships with leading real estate developers, industrial organizations, and high-profile investors across South India.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Sector overview */}
      <section className="py-16 bg-cream border-b border-brand-100">
        <div className="container-site grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="text-center p-6 bg-white rounded-sm border border-brand-100 shadow-soft">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-display text-2xl font-semibold text-brand-700 mb-1">{s.count}</div>
                <div className="text-xs font-body text-forest/60 uppercase tracking-wide">{s.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Client list */}
      <section className="py-24 bg-gradient-subtle" aria-labelledby="clients-heading">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">In Land Aggregation</span>
              <h2 id="clients-heading" className="section-heading">Clients &amp; Collaborations</h2>
              <p className="text-forest/60 font-body mt-4 max-w-xl mx-auto">
                A selection of the prominent organizations and developers we have served over the years.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                className="bg-white border border-brand-100 rounded-sm p-6 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-brand-300 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="w-10 h-10 rounded-sm bg-brand-50 flex items-center justify-center text-brand-700 font-display text-lg font-semibold mb-4 group-hover:bg-brand-100 transition-colors">
                  {c.name.charAt(0)}
                </div>
                <h3 className="font-display text-base font-semibold text-forest mb-1 leading-snug">{c.name}</h3>
                <p className="text-xs font-body text-brand-600 uppercase tracking-wide mb-2">{c.sector}</p>
                <p className="text-xs font-body text-forest/50">{c.note}</p>
              </motion.div>
            ))}
          </div>

          {/* Plus many more */}
          <SectionReveal delay={0.3}>
            <div className="mt-8 text-center p-8 bg-brand-50 border border-brand-200 rounded-sm">
              <p className="text-forest/70 font-body">
                <span className="font-semibold text-forest">…and many more high-profile individuals</span> across Telangana, Andhra Pradesh, and Karnataka who have trusted LA Infra for ethical land transactions.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Trust statement */}
      <section className="py-20 bg-forest" aria-labelledby="trust-statement">
        <div className="container-site max-w-3xl text-center">
          <SectionReveal>
            <span className="section-label text-brand-400 mb-5 block">Our Promise to Every Client</span>
            <h2 id="trust-statement" className="font-display text-display-md text-cream mb-6">
              "Every client, regardless of transaction size, deserves complete transparency and legal security."
            </h2>
            <p className="text-cream/55 font-body leading-relaxed mb-8">
              From prominent developers to individual investors, our commitment to ethical practice, clear-title delivery, and honest communication remains absolute. We measure success not just by growth, but by the trust each client places in us.
            </p>
            <Link to="/contact" className="btn-primary">Begin a Conversation</Link>
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        heading="Partner with a Real Estate Organization You Can Trust"
        sub="Explore clear-title farmland, estate, and eco-development opportunities with LA Infra."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="About Us"
        secondaryTo="/about-us"
      />
    </>
  )
}

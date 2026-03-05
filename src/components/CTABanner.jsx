import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

export default function CTABanner({ heading, sub, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
  return (
    <section className="bg-gradient-hero noise-overlay relative overflow-hidden py-20">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-brand-700/20 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-brand-700/20 pointer-events-none" />

      <div className="container-site relative z-10 text-center">
        <SectionReveal>
          <span className="section-label text-brand-400 mb-4 block">Take the Next Step</span>
          <h2 className="font-display text-display-lg text-cream mb-5 max-w-2xl mx-auto">{heading}</h2>
          <p className="text-cream/60 font-body text-base max-w-xl mx-auto mb-10">{sub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to={primaryTo} className="btn-primary">{primaryLabel}</Link>
            </motion.div>
            {secondaryLabel && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to={secondaryTo} className="btn-outline-white">{secondaryLabel}</Link>
              </motion.div>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

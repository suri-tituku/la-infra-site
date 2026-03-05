import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, body, delay = 0, variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <motion.div
      className={`group p-7 border rounded-sm transition-all duration-400
        ${isDark
          ? 'bg-brand-900/40 border-brand-800/60 hover:bg-brand-900/60 hover:border-brand-700/60'
          : 'bg-white border-brand-100 hover:border-brand-300 hover:shadow-card'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -3 }}
    >
      <div className={`w-11 h-11 rounded-sm flex items-center justify-center mb-5 transition-all duration-300
        ${isDark
          ? 'bg-brand-800/60 text-brand-300 group-hover:bg-brand-700/60'
          : 'bg-brand-50 text-brand-700 group-hover:bg-brand-100'}`}>
        {icon}
      </div>
      <h3 className={`font-display text-lg font-semibold mb-2.5 ${isDark ? 'text-cream' : 'text-forest'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-cream/60' : 'text-forest/65'}`}>{body}</p>
    </motion.div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function LeadershipCard({ name, title, suffix, bio, highlights, image, delay = 0 }) {
  return (
    <motion.article
      className="group bg-white border border-brand-100 rounded-sm shadow-soft hover:shadow-lifted transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-700 to-brand-400 group-hover:from-brand-600 transition-all duration-500" />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-700 font-display text-xl font-semibold shrink-0">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-forest leading-tight">
              {name}
              {suffix && <span className="text-sm font-body font-normal text-brand-600 ml-1.5">({suffix})</span>}
            </h3>
            <p className="text-brand-600 text-xs font-body font-semibold tracking-widest uppercase mt-0.5">{title}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-forest/70 font-body leading-relaxed mb-5">{bio}</p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-forest/70">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

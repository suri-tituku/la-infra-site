import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 5000, suffix: '+', label: 'Acres Aggregated', sub: 'Across Telangana, AP & Karnataka' },
  { value: 35,   suffix: '+', label: 'Years of Leadership', sub: 'In Real Estate Sector' },
  { value: 40,   suffix: '+', label: 'Years in Agriculture', sub: 'Organic farming expertise' },
  { value: 30,   suffix: '+', label: 'Countries Studied', sub: 'Eco development insights' },
]

export default function StatsSection() {
  return (
    <section className="bg-forest py-20">
      <div className="container-site grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-light text-brand-300 mb-1">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="font-body text-sm font-semibold text-cream mb-1">{s.label}</div>
            <div className="font-body text-xs text-cream/40">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

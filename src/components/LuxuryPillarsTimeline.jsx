import { motion } from "framer-motion";

const pillars = [
  {
    title: "Land",
    desc: "Secure land assets supported by legal clarity and responsible planning.",
    icon: "🌾",
  },
  {
    title: "Development",
    desc: "Strategic infrastructure and construction designed for long-term value.",
    icon: "🏗️",
  },
  {
    title: "Nature",
    desc: "Ecological awareness guiding sustainable land use.",
    icon: "🌿",
  },
  {
    title: "Trust",
    desc: "Transparent processes and ethical practices that protect investors and communities.",
    icon: "🤝",
  },
];

export default function LuxuryPillarsTimeline() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#f7f4ee]">
      {/* Subtle Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      <div className="container-site relative z-10">
        {/* Luxury Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="text-xs tracking-[0.4em] text-amber-600 uppercase">
              Built on Principles That Endure
            </span>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <h2 className="font-display text-5xl text-forest">
            The Four Pillars of LA Infra
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Gold Line (Desktop Only) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-200 via-amber-500 to-amber-200 shadow-[0_0_6px_rgba(245,158,11,0.35)]" />

          <div className="space-y-16 md:space-y-24">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`grid md:grid-cols-2 gap-10 items-center`}
              >
                {/* Left / Right Alternating */}
                <div
                  className={`${i % 2 === 0 ? "md:text-right" : "md:order-2"}`}
                >
                  <h3 className="font-display text-4xl text-forest mb-6">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {p.desc}
                  </p>
                </div>

                {/* Icon Center */}
                <div className="relative flex justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl border border-amber-200"
                  >
                    {p.icon}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

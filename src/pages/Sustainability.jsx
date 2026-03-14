import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import GoldParticles from "../components/GoldParticles";
import { Link } from "react-router-dom";
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

const naturalLivingFeatures = [
  {
    icon: "🌄",
    title: "Peaceful Natural Landscapes",
    body: "Development environments designed to preserve scenic surroundings and natural beauty.",
  },
  {
    icon: "🧘",
    title: "Space and Tranquility",
    body: "Low-density planning that provides landowners with calm, open, and peaceful living environments.",
  },
  {
    icon: "🌱",
    title: "Opportunities for Organic Farming",
    body: "Land environments that encourage responsible agricultural practices and sustainable farming.",
  },
  {
    icon: "🏡",
    title: "Nature-Oriented Living Environments",
    body: "Communities designed to reconnect people with nature and support healthier lifestyles.",
  },
];

const sustainabilityPractices = [
  {
    icon: "🌿",
    title: "Preservation of Natural Vegetation",
    body: "Protecting existing plant life and maintaining natural landscapes within development areas.",
  },
  {
    icon: "💧",
    title: "Thoughtful Water Management",
    body: "Encouraging responsible water use and planning systems that support sustainable resource management.",
  },
  {
    icon: "📐",
    title: "Responsible Land Planning",
    body: "Carefully designing development layouts that respect terrain and ecological balance.",
  },
  {
    icon: "🌎",
    title: "Reduced Environmental Impact",
    body: "Development practices focused on minimizing disruption to the natural environment.",
  },
];

export default function Sustainability() {
  return (
    <>
      <SEO
        title="Sustainable Farmland Development & Eco Land Planning | LA Infra"
        description="Discover how LA Infra promotes sustainable farmland development through eco-conscious planning, natural land preservation, organic farming, and responsible environmental practices across Telangana and Karnataka."
        url="https://thelainfra.com/sustainability"
        breadcrumbs={[{ name: "Sustainability", path: "/sustainability" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LA Infra",
          url: "https://thelainfra.com",
          description:
            "Sustainable farmland and land development company focused on environmental responsibility across Telangana, Andhra Pradesh, and Karnataka.",
          knowsAbout: [
            "Sustainable Land Development",
            "Farmland Stewardship",
            "Eco Land Planning",
            "Organic Farming",
            "Nature Estate Development",
            "Responsible Agricultural Land Use",
          ],
          sameAs: [
            "https://www.facebook.com/people/Thelainfra/61583035360906/",
            "https://www.instagram.com/thelainfra/",
          ],
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

              <li className="text-cream/80 font-medium">Sustainability</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-display-lg mb-6"
          >
            Sustainability
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cream/70 max-w-2xl leading-relaxed"
          >
            Development in Harmony with Nature
          </motion.p>

          <section className="py-6 max-w-4xl">
            <SectionReveal>
              <p className="mb-6 leading-relaxed text-cream/70">
                At LA Infra, sustainability is not simply an added feature — it
                is a guiding philosophy that influences how we approach land
                development.
              </p>

              <p className="mb-6 leading-relaxed text-cream/70">
                Our projects are designed with the understanding that land is a
                valuable natural resource that must be treated with
                responsibility and respect. Through thoughtful planning and
                environmentally conscious practices, we strive to ensure that
                development enhances the land rather than depleting it.
              </p>

              <p className="leading-relaxed text-cream/70">
                By integrating sustainability into every stage of development,
                LA Infra aims to create environments that remain healthy,
                balanced, and meaningful for generations to come.
              </p>
            </SectionReveal>
          </section>
        </div>
      </section>

      <main className="bg-cream text-forest">
        {/* RESPECT FOR LAND */}
        <section className="bg-[#f5f1e8] py-10">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">Respect for Land</h2>

              <p className="mb-6 leading-relaxed">
                Land is the foundation of every development. At LA Infra, we
                believe that responsible land ownership begins with respecting
                the natural character of the land itself.
              </p>

              <p className="leading-relaxed">
                Rather than forcing artificial designs onto the landscape, our
                development planning focuses on preserving natural terrain,
                maintaining green spaces, and supporting ecological balance.
              </p>

              <p className="leading-relaxed">
                This approach allows us to create developments that feel
                naturally integrated with their surroundings.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* AGRICULTURAL ROOTS */}
        <section className="container-site py-10 max-w-4xl">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">Agricultural Roots</h2>

            <p className="mb-6 leading-relaxed">
              Our philosophy is deeply influenced by a strong connection to
              agriculture and organic farming.
            </p>

            <p className="leading-relaxed">
              Agricultural practices emphasize the importance of soil health,
              biodiversity, and long-term environmental balance — principles
              that also guide our approach to land development.
            </p>

            <p className="leading-relaxed">
              By respecting these traditions, we encourage responsible land use
              that benefits both people and the environment.
            </p>
          </SectionReveal>
        </section>

        {/* ECO DEVELOPMENT */}
        <section className="bg-[#f5f1e8] py-10">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">
                Eco-Conscious Development
              </h2>

              <p className="mb-6 leading-relaxed">
                Sustainable development requires careful consideration of how
                projects interact with the environment.
              </p>

              <p className="mb-6 leading-relaxed">
                At LA Infra, we encourage development practices that support:
              </p>

              <div className="relative space-y-14 mb-8">
                {/* vertical line */}
                <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

                {sustainabilityPractices.map((item, i) => (
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
                These practices help ensure that the natural beauty and
                ecological value of the land are maintained over time.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* WELLNESS */}
        <section className="container-site py-10 max-w-4xl">
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">
              Wellness and Natural Living
            </h2>

            <p className="mb-6 leading-relaxed">
              Modern lifestyles often create distance between people and nature.
            </p>

            <p className="mb-6 leading-relaxed">
              Our developments aim to restore this connection by creating
              environments where individuals can experience:
            </p>

            <div className="relative space-y-14 mb-8">
              {/* vertical timeline line */}
              <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

              {naturalLivingFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative pl-24 group"
                >
                  {/* icon circle */}
                  <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-xl group-hover:scale-110 transition" aria-hidden="true">
                    {item.icon}
                  </div>

                  {/* content card */}
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
              Such environments promote both environmental awareness and
              personal well-being.
            </p>
          </SectionReveal>
        </section>

        {/* LONG TERM STEWARDSHIP — PREMIUM CTA STYLE */}
        <section className="bg-gradient-hero noise-overlay relative overflow-hidden py-20 text-cream">
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
            {/* Gold divider */}
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
              Long-Term Stewardship
            </motion.h2>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="text-cream/80 leading-[2] text-lg md:text-xl"
            >
              True sustainability is measured over generations, not just years.
              <br />
              <br />
              At LA Infra, we approach every development with a long-term
              perspective, recognizing that responsible land stewardship today
              contributes to a healthier environment and stronger communities
              tomorrow.
              <br />
              <br />
              Through sustainable planning and ethical practices, we remain
              committed to building developments that respect nature while
              creating lasting value.
            </motion.p>

            {/* Signature line */}
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

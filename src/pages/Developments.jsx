import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import GoldParticles from "../components/GoldParticles";
import { Trees, Mountain, Map, Sprout, HeartPulse } from "lucide-react";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
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

const ecoRetreatFeatures = [
  {
    icon: <Trees size={20} />,
    title: "Nature-Focused Retreats",
    body: "Retreat environments designed to reconnect people with natural landscapes and outdoor living.",
  },
  {
    icon: <Mountain size={20} />,
    title: "Peaceful Landscapes",
    body: "Natural surroundings that provide calm environments away from dense urban development.",
  },
  {
    icon: <Sprout size={20} />,
    title: "Eco-Conscious Development",
    body: "Development practices that respect environmental balance and sustainable land use.",
  },
  {
    icon: <HeartPulse size={20} />,
    title: "Wellness-Oriented Environments",
    body: "Spaces designed to promote relaxation, wellbeing, and healthier lifestyles in nature.",
  },
];

const natureEstateFeatures = [
  {
    icon: <Map size={20} />,
    title: "Spacious Land Parcels",
    body: "Large land plots that provide owners with space and privacy.",
  },
  {
    icon: <Trees size={20} />,
    title: "Tree-Lined Internal Roads",
    body: "Internal access roads designed with natural tree cover.",
  },
  {
    icon: <Trees size={20} />,
    title: "Preserved Green Zones",
    body: "Dedicated green areas maintained to support biodiversity.",
  },
  {
    icon: <Mountain size={20} />,
    title: "Natural Terrain Integration",
    body: "Development planning that respects the natural contours and terrain of the land.",
  },
];

const farmlandCharacteristics = [
  {
    icon: <Map size={20} />,
    title: "Clear-Title Farmland Parcels",
    body: "Land parcels supported by verified ownership documentation and legal clarity.",
  },
  {
    icon: <Trees size={20} />,
    title: "Natural Landscapes",
    body: "Farmland environments designed to preserve natural terrain and surrounding ecosystems.",
  },
  {
    icon: <Map size={20} />,
    title: "Access Infrastructure",
    body: "Carefully planned internal access and connectivity that support land usability.",
  },
  {
    icon: <Sprout size={20} />,
    title: "Long-Term Agricultural Potential",
    body: "Land suitable for sustainable agricultural use and future farming opportunities.",
  },
];
export default function Developments() {
  return (
    <>
      <SEO
        title="Land Developments"
        description="Explore farmland and estate development projects by LA Infra."
        url="https://thelainfra.com/developments"
        breadcrumbs={[{ name: "Developments", path: "/developments" }]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://thelainfra.com" },
          { name: "Developments", url: "https://thelainfra.com/developments" },
        ]}
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
                <a
                  href="/"
                  className="text-cream/40 hover:text-brand-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li className="text-cream/20">/</li>

              <li className="text-cream/80 font-medium">Developments</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-display-lg mb-6"
          >
            Developments
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cream/70 max-w-2xl leading-relaxed"
          >
            Responsible Land Development
          </motion.p>
          <section className=" py-6 max-w-4xl">
            <SectionReveal>
              <p className="mb-6 leading-relaxed text-cream/70">
                At LA Infra, development begins with a deep respect for land and
                a commitment to responsible planning. Our projects are designed
                to create land assets that combine secure ownership,
                environmental awareness, and long-term value.
              </p>

              <p className="mb-6 leading-relaxed text-cream/70">
                Rather than focusing on speculative development models, we
                approach every project with a philosophy centered on legal
                clarity, sustainable land use, and thoughtful design.
              </p>

              <p className="leading-relaxed text-cream/70">
                Our developments aim to create environments where people can
                reconnect with nature while benefiting from responsible land
                ownership.
              </p>
            </SectionReveal>
          </section>
        </div>
      </section>

      <main className="bg-cream text-forest">
        {/* FARMLAND STEWARDSHIP */}
        <section className="bg-[#f5f1e8] py-10">
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">
                Farmland Stewardship Projects
              </h2>

              <p className="mb-6 leading-relaxed">
                Farmland represents one of the most enduring and meaningful
                forms of land ownership.
              </p>

              <p className="mb-6 leading-relaxed">
                LA Infra develops farmland ventures designed to support
                responsible agricultural use and long-term land stewardship.
              </p>

              <p className="mb-8 leading-relaxed">
                These projects are carefully planned to provide landowners with
                opportunities to engage with agriculture, organic farming, and
                sustainable land practices.
              </p>

              <h3 className="font-semibold mb-4">
                Key characteristics include:
              </h3>

              <div className="relative space-y-14 mb-8">
                {/* vertical line */}
                <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

                {farmlandCharacteristics.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="relative pl-24 group"
                  >
                    {/* icon */}
                    <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-brand-500 group-hover:scale-110 transition">
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
            </SectionReveal>
          </div>
        </section>

        {/* NATURE ESTATE */}
        <section className="container-site py-10 max-w-4xl">
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">
              Nature Estate Communities
            </h2>

            <p className="mb-6 leading-relaxed">
              Nature estate developments are designed to provide landowners with
              space, privacy, and connection to natural landscapes.
            </p>

            <p className="mb-6 leading-relaxed">
              Unlike dense urban developments, these projects emphasize
              low-density planning and open environments, allowing landowners to
              experience a more balanced lifestyle.
            </p>

            <h3 className="font-semibold mb-4">
              These developments typically feature:
            </h3>

            <div className="relative space-y-14 mb-8">
              {/* vertical line */}
              <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

              {natureEstateFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative pl-24 group"
                >
                  {/* icon */}
                  <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md group-hover:shadow-lg flex items-center justify-center text-brand-500 group-hover:scale-110 transition">
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
              Nature estate communities offer an opportunity for individuals and
              families to enjoy land ownership within peaceful surroundings.
            </p>
          </SectionReveal>
        </section>

        {/* ECO RETREAT */}
        <section className="bg-[#f5f1e8] py-10">
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">
                Eco Retreat Destinations
              </h2>

              <p className="mb-6 leading-relaxed">
                Modern lifestyles increasingly require spaces that promote
                well-being, relaxation, and connection with nature.
              </p>

              <p className="mb-6 leading-relaxed">
                LA Infra develops eco-retreat environments that combine natural
                landscapes with thoughtfully planned retreat spaces.
              </p>

              <p className="mb-6 leading-relaxed">
                These projects are designed to create environments where
                visitors and landowners can experience:
              </p>

              <div className="relative space-y-14 mb-8">
                {/* vertical line */}
                <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 opacity-40" />

                {ecoRetreatFeatures.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="relative pl-24 group"
                  >
                    {/* icon */}
                    <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border border-brand-300 shadow-md flex items-center justify-center text-brand-500 group-hover:scale-110 transition">
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
                Such developments encourage a lifestyle that balances modern
                living with nature.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* DEVELOPMENT APPROACH */}
        <section className="container-site py-10 max-w-4xl">
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <SectionReveal>
            <h2 className="font-display text-3xl mb-6">
              Our Development Approach
            </h2>

            <p className="mb-10 leading-relaxed">
              Every LA Infra project follows a disciplined development framework
              designed to ensure responsible outcomes.
            </p>

            <div className="space-y-6 text-brand-800">
              <p>
                <strong>Strategic Land Selection</strong>
                <br />
                Careful identification of land parcels with strong long-term
                potential.
              </p>

              <p>
                <strong>Legal Due Diligence</strong>
                <br />
                Thorough verification of ownership records and documentation.
              </p>

              <p>
                <strong>Responsible Planning</strong>
                <br />
                Thoughtful layout design that respects natural terrain and
                environmental balance.
              </p>

              <p>
                <strong>Sustainable Development</strong>
                <br />
                Encouraging eco-conscious practices and responsible land use.
              </p>

              <p>
                <strong>Long-Term Stewardship</strong>
                <br />
                Creating developments that remain meaningful and valuable for
                generations.
              </p>
            </div>
          </SectionReveal>
        </section>

        {/* CURRENT PROJECT */}
        <section className="bg-[#f5f1e8] py-10">
          {/* Luxury Divider */}
          <div className="flex items-center justify-center gap-6 mt-1 mb-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-amber-400" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
          <div className="container-site max-w-4xl">
            <SectionReveal>
              <h2 className="font-display text-3xl mb-6">Current Project</h2>

              <h3 className="font-display text-2xl mb-4">Red wood Retreats</h3>

              <p className="mb-6 leading-relaxed">
                Red Wood Retreats is a nature-inspired land retreat located near
                Kamlapur, approximately two hours from Hyderabad and around 30
                km from Kalaburagi (Gulbarga).
              </p>

              <p className="mb-6 leading-relaxed">
                Inspired by the strength and longevity of the Red Sandalwood
                tree, the development is designed as a low-density nature estate
                that emphasizes open landscapes and responsible land planning.
              </p>

              <p className="leading-relaxed">
                The project offers an opportunity for individuals and families
                to experience peaceful surroundings, meaningful land ownership,
                and long-term value.
              </p>
            </SectionReveal>
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
                “Land is not just an asset. It is a responsibility that must be
                handled with integrity.”
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

        {/* CLOSING */}
        <section className="  bg-[#f5f1e8] py-14 ">
          <div className="text-center container-site max-w-3xl">
            <SectionReveal>
              <p className="text-lg leading-relaxed">
                At LA Infra, development is not simply about transforming land —
                it is about stewardship, responsibility, and creating lasting
                value through thoughtful land planning.
              </p>
            </SectionReveal>
          </div>
        </section>
      </main>

      {/* SEO Breadcrumb Schema */}
      <script type="application/ld+json">
        {`
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
  {
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://www.thelainfra.com/"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Developments",
   "item": "https://www.thelainfra.com/developments"
  }
 ]
}
`}
      </script>
    </>
  );
}

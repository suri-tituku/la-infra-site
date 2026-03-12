import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LeadershipCard({
  name,
  suffix,
  title,
  bio,
  highlights,
  image,
  profileId,
  delay = 0,
}) {
  return (
    <motion.article
      className="group relative bg-white border border-[#e8e5df]
      rounded-sm shadow-[0_6px_30px_rgba(0,0,0,0.05)]
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      transition-all duration-500 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
    >
      {/* Premium Top Accent */}
      <div className="h-[4px] bg-gradient-to-r from-[#1c3b2b] via-[#2e6d4d] to-[#1c3b2b]" />

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-200/40 to-transparent blur-md" />

            <img
              src={image}
              alt={name}
              className="relative w-40 h-40 object-cover rounded-full 
              ring-[5px] ring-[#f2efe8] shadow-md"
            />
          </div>

          {/* Name + Title */}
          <div>
            <h3 className="font-display text-[24px] text-forest leading-tight tracking-wide">
              {name}

              {suffix && (
                <span className="text-sm font-body text-brand-600 ml-1.5">
                  ({suffix})
                </span>
              )}
            </h3>

            <p className="text-brand-700 text-xs font-semibold tracking-[0.35em] uppercase mt-1">
              {title}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[15px] text-forest/70 leading-relaxed mb-2">{bio}</p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 mb-8">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-forest/70"
              >
                <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-amber-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto flex justify-end">
          <Link
            to={`/leadership#${profileId}`}
            className="inline-flex items-center gap-2 px-7 py-3
            bg-forest text-white
            tracking-[0.3em] uppercase text-[11px] font-semibold
            rounded-sm
            shadow-[0_8px_20px_rgba(0,0,0,0.15)]
            hover:bg-forest/90
            hover:-translate-y-0.5
            transition-all duration-300"
          >
            Read Full Profile →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

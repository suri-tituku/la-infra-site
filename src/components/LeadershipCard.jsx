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
  profileId, // 👈 add this
  delay = 0,
}) {
  return (
    <motion.article
      className="group bg-white border border-brand-100 rounded-sm shadow-soft 
             hover:shadow-lifted transition-all duration-500 overflow-hidden
             flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-700 to-brand-400 group-hover:from-brand-600 transition-all duration-500" />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-full shadow-md shrink-0 ring-4 ring-brand-100"
          />
          <div>
            <h3 className="font-display text-xl font-semibold text-forest leading-tight">
              {name}
              {suffix && (
                <span className="text-sm font-body font-normal text-brand-600 ml-1.5">
                  ({suffix})
                </span>
              )}
            </h3>
            <p className="text-brand-600 text-xs font-body font-semibold tracking-widest uppercase mt-0.5">
              {title}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-forest/70 font-body leading-relaxed mb-5">
          {bio}
        </p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-forest/70"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-8 flex justify-end">
          <Link
            to={`/leadership#${profileId}`}
            className="inline-flex items-center gap-3 px-6 py-3 
               bg-forest text-white 
               tracking-[0.25em] uppercase text-xs font-semibold
               rounded-sm shadow-lg
               hover:-translate-y-0.5 hover:shadow-xl
               transition-all duration-300 group"
          >
            Read Full Profile →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

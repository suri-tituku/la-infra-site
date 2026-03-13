import React from "react";
import { motion } from "framer-motion";

import farmlandImage from "../assets/images/story/farmland.webp";

export default function StorySection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-site grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-display-lg mb-6">
            Land Investment Reimagined
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At LA Infra we focus on sustainable farmland ventures, clear legal
            titles and nature aligned development. Every project is designed to
            create value across generations.
          </p>
        </motion.div>

        <motion.img
          src={farmlandImage}
          alt="Sustainable farmland investment"
          className="rounded-lg shadow-2xl w-full object-cover hover:scale-105 transition duration-700"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        />
      </div>
    </section>
  );
}

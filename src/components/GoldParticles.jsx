// components/GoldParticles.jsx
import { motion } from "framer-motion";

export default function GoldParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[2px] h-[2px] bg-amber-300 rounded-full opacity-40"
          initial={{ y: -20, x: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{
            y: "110%",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

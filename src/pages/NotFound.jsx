import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="text-6xl font-display text-forest mb-4">404</h1>

        <h2 className="text-2xl font-display text-forest mb-4">
          Page Not Found
        </h2>

        <p className="text-brand-700 mb-8">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="btn-primary inline-flex items-center justify-center"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

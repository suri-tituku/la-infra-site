import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function InvestorPopup() {
const [open, setOpen] = useState(false);

useEffect(() => {
const timer = setTimeout(() => setOpen(true), 6000);
return () => clearTimeout(timer);
}, []);

if (!open) return null;

return ( <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">

```
  <motion.div
    initial={{ opacity:0, scale:0.9 }}
    animate={{ opacity:1, scale:1 }}
    transition={{ duration:0.35 }}
    className="bg-white w-[420px] max-w-[92%] rounded-xl shadow-2xl p-8"
  >

    <h3 className="font-display text-2xl mb-6 text-center">
      Invest in Premium Land
    </h3>

    {/* INPUTS */}

    <div className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition"
      />

    </div>

    {/* BUTTON */}

    <button
      className="w-full mt-6 bg-brand-700 text-white py-3 rounded-lg font-semibold tracking-wide hover:bg-brand-800 transition"
    >
      DOWNLOAD BROCHURE
    </button>

    {/* CLOSE */}

    <button
      onClick={() => setOpen(false)}
      className="block mx-auto mt-5 text-sm text-gray-500 hover:text-black transition"
    >
      Close
    </button>

  </motion.div>

</div>

);
}

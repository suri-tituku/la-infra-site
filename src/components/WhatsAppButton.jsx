import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const phone = '919666088822'
  const message = encodeURIComponent('Hello! I am interested in learning more about LA Infra projects.')
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-forest text-cream text-xs font-body px-3 py-2 rounded-sm shadow-lifted whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LA Infra on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lifted hover:shadow-xl transition-shadow"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.63.713 5.094 1.957 7.213L2 30l6.99-1.928A13.937 13.937 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.568 11.568 0 01-5.848-1.58l-.42-.249-4.148 1.143 1.165-4.025-.275-.437A11.537 11.537 0 014.4 16C4.4 9.596 9.596 4.4 16 4.4S27.6 9.596 27.6 16 22.404 27.6 16 27.6zm6.3-8.668c-.345-.173-2.044-1.008-2.36-1.123-.317-.114-.548-.172-.779.173-.23.344-.893 1.123-1.095 1.352-.2.23-.403.258-.748.086-.345-.172-1.456-.537-2.772-1.712-1.024-.914-1.715-2.042-1.917-2.387-.2-.344-.022-.531.15-.703.154-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.432-.028-.604-.086-.172-.78-1.878-1.066-2.572-.282-.673-.566-.58-.78-.59-.2-.01-.432-.013-.663-.013-.23 0-.604.086-.92.432-.317.344-1.208 1.18-1.208 2.876 0 1.695 1.237 3.333 1.409 3.562.172.23 2.435 3.716 5.9 5.21.824.355 1.467.567 1.968.726.826.263 1.578.226 2.172.137.663-.1 2.044-.835 2.332-1.64.288-.806.288-1.497.2-1.64-.085-.143-.316-.23-.66-.402z"/>
        </svg>
      </motion.a>
    </div>
  )
}

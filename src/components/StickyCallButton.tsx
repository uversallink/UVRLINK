import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const StickyCallButton = () => {
  return (
    <motion.a
      href="tel:855-750-6771"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 hover:-translate-y-1 group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call us now at (855) 750-6771"
    >
      <Phone className="w-7 h-7 text-white" />
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Tooltip on hover */}
      <div className="absolute -top-16 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Call Now: (855) 750-6771
        <div className="absolute top-full right-4 border-4 border-transparent border-t-primary"></div>
      </div>
    </motion.a>
  );
};

export default StickyCallButton;

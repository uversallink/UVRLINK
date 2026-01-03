import { motion } from "framer-motion";

interface RibbonDecorationProps {
  className?: string;
  variant?: "coral" | "cyan" | "gradient";
}

const RibbonDecoration = ({ className = "", variant = "gradient" }: RibbonDecorationProps) => {
  const gradientClass = {
    coral: "from-accent via-accent to-gold",
    cyan: "from-secondary via-cyan to-secondary",
    gradient: "from-accent via-coral to-gold",
  };

  return (
    <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
      <motion.svg
        viewBox="0 0 1200 200"
        className="w-full h-auto"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id={`ribbonGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="50%" stopColor="hsl(340 82% 52%)" />
            <stop offset="100%" stopColor="hsl(var(--gold))" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-100,100 Q200,20 400,100 T800,100 T1200,100 T1500,100"
          fill="none"
          stroke={`url(#ribbonGradient-${variant})`}
          strokeWidth="40"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

export default RibbonDecoration;

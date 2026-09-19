import { motion as Motion, useReducedMotion } from "framer-motion";
export default function Reveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}

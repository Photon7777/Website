import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <Motion.div
      aria-hidden="true"
      className="reading-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
    />
  );
}

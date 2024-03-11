import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`0 1`, `1.33 1`],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return <motion.div ref={ref}>{children}</motion.div>;
};

export default FadeIn;

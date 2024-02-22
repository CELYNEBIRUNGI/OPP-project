import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const ScrollBased = ({
  className,
  start,
  finish,
  scale,
  opacity,
  children,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`0 ${start}`, `${finish} 1`],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [scale, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [opacity, 1]);

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollBased;

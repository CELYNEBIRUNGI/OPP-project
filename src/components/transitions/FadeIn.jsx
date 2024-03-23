import { motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const FadeIn = ({ className, children }) => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: [`0 1`, `1.33 1`],
  // });
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div ref={ref} className={className}>
      {children}
    </motion.div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.any,
};

export default FadeIn;

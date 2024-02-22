import React from "react";
import { motion } from "framer-motion";

const Staggered = ({ index, className, children }) => {
  const staggerVariants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: (idx) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15 * idx,
      },
    }),
  };
  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default Staggered;

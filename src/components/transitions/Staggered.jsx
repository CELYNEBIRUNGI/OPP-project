import { motion } from "framer-motion";
import PropTypes from "prop-types";

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

Staggered.propTypes = {
  index: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Staggered;

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const animation = {
  initial: {
    opacity: [0, 0],
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
const PageTransition = ({ children, myClass }) => {
  return (
    <motion.main
      className={`${myClass ? myClass : ""} motion-div`}
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
};

PageTransition.propTypes = {
  children: PropTypes.any,
  myClass: PropTypes.string,
};

export default PageTransition;

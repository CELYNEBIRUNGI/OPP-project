import { motion } from "framer-motion";

const animation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const PageTransition = ({ children, myClass }) => {
  return (
    <motion.div
      className={`${myClass ? myClass : ""} motion-div`}
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

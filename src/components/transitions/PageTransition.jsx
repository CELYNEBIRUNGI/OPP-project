import { motion } from "framer-motion";

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

export default PageTransition;

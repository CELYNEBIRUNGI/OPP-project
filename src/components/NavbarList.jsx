import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const NavbarList = ({
  verifiedLocation,
  galleryLocation,
  links,
  setShowMenu,
  showMenu,
  galleryNavList,
  projectHubList,
}) => {
  return (
    <>
      <ul className="nav-list">
        <motion.li
          custom={0.3}
          variants={variant}
          initial="initial"
          animate="enter"
          exit="exit"
          onClick={() => setShowMenu(false)}
        >
          <Link to="/">Home</Link>
        </motion.li>
        {!verifiedLocation &&
          !galleryLocation &&
          links?.map((link, i) => (
            <motion.li
              key={link.name}
              custom={i}
              variants={variant}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <Link to={link.path}>{link.name}</Link>
            </motion.li>
          ))}
        {verifiedLocation &&
          projectHubList.map((link, i) => (
            <motion.li
              key={link.id}
              custom={i}
              variants={variant}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <Link to={`/project/${link.id}`}>{link.title}</Link>
            </motion.li>
          ))}
        {galleryLocation &&
          galleryNavList.map((link, i) => (
            <motion.li
              key={link.title}
              custom={i}
              variants={variant}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <Link to={`/gallery/${link.link}`}>{link.title}</Link>
            </motion.li>
          ))}
        <motion.li
          custom={6.5}
          variants={variant}
          initial="initial"
          animate="enter"
          exit="exit"
          onClick={() => setShowMenu(false)}
        >
          <a href="#contact">Contact Us</a>
        </motion.li>
      </ul>
    </>
  );
};

export default NavbarList;

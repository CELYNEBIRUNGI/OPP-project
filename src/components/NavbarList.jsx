import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom/dist";

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
  galleryNavList,
  projectHubList,
  isMobile,
}) => {
  return (
    <>
      <ul className="nav-list">
        <motion.li onClick={() => setShowMenu(false)}>
          <NavLink to="/">Home</NavLink>
        </motion.li>
        {!verifiedLocation &&
          !galleryLocation &&
          links?.map((link, i) => (
            <motion.li
              key={link.name}
              custom={i}
              variants={isMobile ? variant : null}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </motion.li>
          ))}
        {verifiedLocation &&
          projectHubList.map((link, i) => (
            <motion.li
              key={link.id}
              custom={i}
              variants={isMobile ? variant : null}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <NavLink to={`/project/${link.id}`}>{link.title}</NavLink>
            </motion.li>
          ))}
        {galleryLocation &&
          galleryNavList.map((link, i) => (
            <motion.li
              key={link.title}
              custom={i}
              variants={isMobile ? variant : null}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setShowMenu(false)}
            >
              <NavLink to={`/gallery/${link.link}`}>{link.title}</NavLink>
            </motion.li>
          ))}
        <motion.li onClick={() => setShowMenu(false)}>
          <a href="#contact">Contact Us</a>
        </motion.li>
      </ul>
    </>
  );
};

NavbarList.propTypes = {
  verifiedLocation: PropTypes.any,
  galleryLocation: PropTypes.any,
  links: PropTypes.array,
  setShowMenu: PropTypes.func,
  galleryNavList: PropTypes.array,
  projectHubList: PropTypes.array,
  isMobile: PropTypes.bool,
};
export default NavbarList;

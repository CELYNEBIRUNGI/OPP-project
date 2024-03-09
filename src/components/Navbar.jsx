import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { projectHubList } from "../lib/projectHubLists";
import { galleryNavList } from "../lib/galleryLists";
import palm from "../assets/palm.png";
import logo from "../assets/logo.png";
import Headroom from "react-headroom";
import { AnimatePresence } from "framer-motion";
import NavbarList from "./NavbarList";

const burgerVariants = {
  open: {
    width: "90%",
    height: "90dvh",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "100px",
    height: "40px",
    transition: {
      duration: 0.55,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  normal: {
    // with: "100%",
    height: "fit-content",
  },
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const { id, section } = useParams();

  const verifiedLocation = location.pathname === `/project/${id}`;
  const galleryLocation = location.pathname === `/gallery/${section}`;

  const links = [
    { name: "About", path: "/about" },
    { name: "Project Hubs", path: "/project" },
    { name: "Impact", path: "/impact" },
    { name: "Publication", path: "/publication" },
    { name: "Gallery", path: "/gallery/general" },
  ];

  return (
    <Headroom>
      <motion.nav
        variants={burgerVariants}
        animate={showMenu ? "open" : isMobile ? "closed" : "normal"}
        initial={isMobile ? "closed" : "normal"}
      >
        {!verifiedLocation && !galleryLocation && (
          <div className="nav-header">
            <div>
              <img src={logo} alt="Ministry logo" />
              <p>Ministry of Agriculture, Animal and Industry & Fisheries</p>
            </div>
            <div>
              <img src={palm} alt="palm logo" />
              <p>National Oil Palm Project</p>
            </div>
          </div>
        )}
        <div className="nav-list-container">
          {/* <AnimatePresence> */}
          {showMenu}
          <NavbarList
            verifiedLocation={verifiedLocation}
            galleryLocation={galleryLocation}
            links={links}
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            galleryNavList={galleryNavList}
            projectHubList={projectHubList}
            isMobile={isMobile}
          />
          {/* </AnimatePresence> */}
        </div>
        <div className="burger" onClick={() => setShowMenu(!showMenu)}>
          <motion.div
            className="burger-content"
            animate={{
              top: showMenu ? "-100%" : "0",
            }}
            transition={{ duration: "0.5", ease: [0.76, 0, 0.24, 1] }}
          >
            <button>
              <IoClose />
            </button>
            <button>
              <GiHamburgerMenu />
            </button>
          </motion.div>
        </div>
      </motion.nav>
    </Headroom>
  );
};

export default Navbar;

import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { projectHubList } from "../lib/lists";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import palm from "../assets/palm.png";
import logo from "../assets/logo.png";
import Headroom from "react-headroom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  let location = useLocation();
  let { id } = useParams();
  const verifiedLocation = location.pathname === `/project/${id}`;
  const links = [
    { name: "About", path: "/about" },
    { name: "Project Hubs", path: "/project" },
    { name: "Impact", path: "/impact" },
    { name: "Publication", path: "/publication" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact US", path: "/contact" },
  ];

  useEffect(() => {
    const revealMenu = () => {
      const navListContainer = document.querySelector(".nav-list-container");
      const burger = document.querySelector(".burger");
      navListContainer?.classList.toggle("reveal");
      burger?.classList.toggle("toggle");
    };

    revealMenu();
  }, [showMenu, location]);
  return (
    <>
      <Headroom>
        <nav>
          {!verifiedLocation && (
            <div className={verifiedLocation ? "" : "nav-header"}>
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
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              {!verifiedLocation
                ? links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))
                : projectHubList.map((link) => (
                    <li key={link.id}>
                      <Link to={`/project/${link.id}`}>{link.title}</Link>
                    </li>
                  ))}
              <li>
                <button
                  className="close"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <IoClose />
                </button>
              </li>
            </ul>
          </div>
          <div className="burger" onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { projectHubList } from "../lib/lists";
import { galleryNavList } from "../lib/galleryLists";
import palm from "../assets/palm.png";
import logo from "../assets/logo.png";
import Headroom from "react-headroom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
    <Headroom>
      <nav>
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
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!verifiedLocation &&
              !galleryLocation &&
              links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            {verifiedLocation &&
              projectHubList.map((link) => (
                <li key={link.id}>
                  <Link to={`/project/${link.id}`}>{link.title}</Link>
                </li>
              ))}
            {galleryLocation &&
              galleryNavList.map((link) => (
                <li key={link.title}>
                  <Link to={`/gallery/${link.link}`}>{link.title}</Link>
                </li>
              ))}
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <button className="close" onClick={() => setShowMenu(!showMenu)}>
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
  );
};

export default Navbar;

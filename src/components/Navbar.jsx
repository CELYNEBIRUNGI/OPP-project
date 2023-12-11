import React from "react";
import { NavLink, Link } from "react-router-dom";
import palm from "../assets/palm.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project Hubs", path: "/project" },
    { name: "Impact", path: "/impact" },
    { name: "Publication", path: "/publication" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact US", path: "/contact" },
  ];
  return (
    <nav>
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
      <div className="nav-list-container">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

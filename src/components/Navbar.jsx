import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { projectHubList } from "../lib/lists";
import palm from "../assets/palm.png";
import logo from "../assets/logo.png";
import Headroom from "react-headroom";

const Navbar = () => {
  let location = useLocation();
  let { id } = useParams();
  const verifiedLocation = location.pathname === `/project/${id}`;
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
            {!verifiedLocation ? (
              <ul className="nav-list">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {projectHubList.map((link) => (
                  <li key={link.id}>
                    <Link to={`/project/${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Navbar;

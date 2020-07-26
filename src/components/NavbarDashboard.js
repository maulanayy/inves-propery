import React from "react";
import { NavLink } from "react-router-dom";
const NavbarDashboard = () => {
  return (
    <div className="navbar navbar-expand-lg container d-flex justify-content-end dashboard-header">
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li>
            <NavLink to="/properti">Daftar Properti</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Tentang Kami</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works">Cara Kerja</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDashboard;

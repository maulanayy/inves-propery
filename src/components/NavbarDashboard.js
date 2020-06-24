import React from "react";
import { NavLink } from "react-router-dom";
const NavbarDashboard = () => {
  return (
    <div className="navbar navbar-expand-lg container d-flex justify-content-end dashboard-header">
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li>
            <a href="#header">Daftar Properti</a>
          </li>
          <li>
            <a href="#features">Tentang Kami</a>
          </li>
          <li>
            <a href="#gallery">Cara Kerja</a>
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

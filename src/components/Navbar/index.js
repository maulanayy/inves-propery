import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/assets/logo/logo.png";

// const [scrolled, setScrolled] = useState(false);

const Navbar = () => {
  return (
    <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex ">
        <div className="logo mr-auto">
          <NavLink to="/">
            <img src={Logo} alt="" className="img-fluid" />
          </NavLink>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <NavLink to="/properti">Daftar Properti</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Tentang Kami</NavLink>
            </li>
            <li>
              <NavLink to="/how-to">Cara Kerja</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>

            <li className="login">
              <NavLink to="/login">Masuk</NavLink>
            </li>
            <li className="register">
              <NavLink to="/register">Daftar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutOutlined,
  ShoppingOutlined,
  UserOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import Logo from "../../public/assets/logo/logo.png";

const LeftSideBar = () => {
  return (
    <nav className="left-sidebar">
      <ul className="nav flex-column">
        <li>
          <NavLink to="/dashboard">
            <img src={Logo} alt="" className="img-fluid logo" />
          </NavLink>
        </li>
      </ul>

      <div className="row left-sidebar-menu justify-content-center align-items-center">
        <div>
          <ul className="nav flex-column mb-2 align-item-right">
            <li className="nav-link">
              <NavLink to="/dashboard" className="link">
                <LayoutOutlined /> Dashboard
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/portofolio" className="link">
                <ShoppingOutlined /> Portofolio
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/profile" className="link">
                <UserOutlined /> Profil
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-md-10 helper">
          <p className="helper-info">
            Masih bingun dengan <br />
            tampilan Dashboard ?
          </p>
          <a href="#" className="helper-button">
            {" "}
            Ulangi Tutorial{" "}
          </a>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div>
          <ul className="nav flex-column mb-2 align-item-right">
            <li className="nav-link">
              <ExportOutlined twoToneColor="#ff0000" />
              <NavLink className="link link-exit" to="/">
                Keluar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
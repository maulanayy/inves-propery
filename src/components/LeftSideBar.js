import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutOutlined,
  ShoppingOutlined,
  UserOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { images } from "../config";
const LeftSideBar = () => {
  return (
    <nav className="left-sidebar">
      <ul className="nav flex-column">
        <li>
          <NavLink to="/dashboard">
            <img src={images.Logo} alt="" className="img-fluid logo" />
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
            <li className="nav-link logout">
              <ExportOutlined twoToneColor="#ff0000" />
              <a class="link link-exit ml-2" href="/logout">Keluar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;

import React from "react";
import { images } from "../config";
import { NavLink } from "react-router-dom";

// const showModal = () => {
//   password;
// };

const RightSideBar = () => {
  return (
    <nav className="right-sidebar">
      <div className="right-sidebar-sticky">
        <div className="profile text-center ">
          <img src={images.profileImg} className="img-fluid" alt=""/>
          <p>
            Ilham Akbar <br />
            98ilham.akbar@gmail.com <br />
            <NavLink to="#" onClick={() => console.log("waw")}>
              <span>Ubah Password</span>
            </NavLink>
          </p>
        </div>
        <div className="container notification">
          <div className="row">
            <div className="col-sm-9">Notifikasi</div>
            <div className="col-sm-1">
              <div className="counter text-center">3</div>
            </div>
          </div>
          <div className="row notification-list">
            <div className="col-sm-3 py-1 px-auto">ICON</div>
            <div className="col-sm-9 notification-info">
              <div className="notification-info">
                Panorama Cihanjuang 5 Hari Lagi
              </div>
              <div className="notification-date">Rabu - 26 Februari 2020</div>
            </div>
          </div>
          <div className="row notification-list">
            <div className="col-sm-3 py-1 px-auto">ICON</div>
            <div className="col-sm-9 notification-info">
              <div className="notification-info">
                Panorama Cihanjuang 5 Hari Lagi
              </div>
              <div className="notification-date">Rabu - 26 Februari 2020</div>
            </div>
          </div>
          <div className="text-right remove-notification">Hapus Semua</div>
        </div>

        <div className="bank-account">
          Rekening Bank
          <div className="bank-list"></div>
        </div>
      </div>
    </nav>
  );
};

export default RightSideBar;

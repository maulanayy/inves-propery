import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import AssetSix from "../../../public/assets/asset-6.png";
import { Input } from "antd";

const View = () => {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <section id="section-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 ">
                <div className="form">
                  <h3>
                    <span> Mulai Investasi Anda</span>
                    <p>Lengkapi data di bawah dan buat akun anda</p>
                  </h3>
                  <form>
                    <div className="md-form">
                      <label>Email</label>
                      <Input placeholder="Email" name="email" />
                    </div>
                    <div className="md-form mt-1">
                      <label>Nama Lengkap</label>
                      <Input placeholder="Nama Lengkap" name="nama" />
                    </div>
                    <div className="md-form mt-1">
                      <label>Password</label>
                      <Input.Password placeholder="Password" name="pass" />
                    </div>
                    <br />
                    <NavLink to="/journey" className="bn btn-primary button">
                      Daftar
                    </NavLink>
                    Sudah memiliki akun ?{" "}
                    <NavLink to="/login">
                      <span>Masuk</span>
                    </NavLink>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2">
                <img src={AssetSix} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

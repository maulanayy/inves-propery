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
                  <p className="text-left forgot">
                    {" "}
                    <NavLink to="/login" className="back">
                      Kembali
                    </NavLink>
                  </p>
                  <h3 className="mb-0">
                    <span>Lupa</span> Password ?
                  </h3>
                  Masukan email yang telah terdaftar
                  <form className="mt-5">
                    <div className="md-form">
                      <label>Email</label>
                      <Input placeholder="Email" type="email" name="email" />
                    </div>
                    <div className="justify-content-center text-center mt-5">
                      <NavLink
                        to="/dashboard"
                        className="btn btn-primary button"
                      >
                        Kirim
                      </NavLink>
                    </div>
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

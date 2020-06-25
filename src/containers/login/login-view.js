import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
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
                    <span> Selamat Datang</span>
                    <br />
                    Kembali
                  </h3>
                  <form>
                    <div className="md-form">
                      <label>Email</label>
                      <Input placeholder="Email" type="email" name="email" />
                    </div>
                    <div className="md-form">
                      <label>Password</label>
                      <Input.Password placeholder="Password" name="pass" />
                    </div>
                    <p className="text-right forgot mt-4">
                      {" "}
                      <NavLink to="/forgot-password">
                        <span>Lupa Password</span>
                      </NavLink>
                    </p>
                    <div className="justify-content-center text-center">
                      <br />
                      <NavLink
                        to="/dashboard"
                        className="btn btn-primary button"
                      >
                        Masuk
                      </NavLink>
                      {/* <button type="submit" class="btn btn-primary button">
                        Masuk
                      </button> */}
                      <br />
                      <br />
                      <br />
                      Belum memiliki akun?
                      <NavLink to="/register">
                        <span> Daftar</span>
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2">
                <img src={images.AssetSix} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

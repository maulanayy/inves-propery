import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../config";

const View = () => {
  return (
    <React.Fragment>
      <div>
        <section id="journey">
          <div className="container mt-2">
            <div className="row ml-5">
              <div className="col-lg-8 align-items-stretch pt-5 info">
                <div>
                  <h3>
                    Halo <span>Ilham!</span>
                  </h3>
                  <h3>
                    Selamat Datang di <span>InvesProperti.id</span>
                  </h3>

                  <div className="row ">
                    <div className="col-lg-8">
                      <p>
                        Sebelum memulai perjalanan kamu di InvesProperti,
                        alangkah baiknya untuk mengenal dirimu sendiri terlebih
                        dahulu.
                      </p>
                      <div className="row mt-3">
                        <div className="col-lg-4">
                          <NavLink to="/journey-one" className="back">
                            Mulai >
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <img src={images.Journey7} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

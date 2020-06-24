import React from "react";
import { NavLink } from "react-router-dom";
import Journey from "../../../public/assets/journey-5.png";

const View = () => {
  return (
    <React.Fragment>
      <div>
        <section id="journey">
          <div className="container mt-2">
            <div className="row ml-5">
              <div className="col-lg-8 align-items-stretch pt-5 info">
                <div>
                  <h4>
                    Apakah keinginan yang ingin kamu
                    <br />
                    capai dari <span>berinvestasi?</span>
                  </h4>
                  <div className="row ">
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="<10.000.000"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="10.000.000 - 50.000.000"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="50.000.000 - 100.000.000"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="100.000.000 - 500.000.000"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder=">500.000.000"
                      />
                      <div className="row mt-5">
                        <div className="col-lg-2">
                          <NavLink to="/journey-four" className="back">
                            Kembali
                          </NavLink>
                        </div>
                        <div className="col-lg-6">
                          <NavLink to="/journey-six" className="ml-4 next">
                            Selanjutnya >
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <img src={Journey} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;
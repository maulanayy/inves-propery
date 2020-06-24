import React from "react";
import { NavLink } from "react-router-dom";
import Journey from "../../../public/assets/journey-1.png";

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
                    Apa pekerjaan kamu <span>saat ini ?</span>
                  </h4>
                  <div className="row ">
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control mt-5 search"
                        id="text"
                        placeholder="Saya adalah seorang"
                      />
                      <div className="row mt-5">
                        <div className="col-lg-2" >
                          <NavLink to="/journey"className="back">Kembali</NavLink>
                        </div>
                        <div className="col-lg-6">
                          <NavLink to="/journey-two" className="ml-4 next">Selanjutnya ></NavLink>
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

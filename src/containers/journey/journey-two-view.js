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
                  <h4>
                    Apakah kamu saat ini sudah menikah atau<br />
                    <span>masih sendiri?</span>
                  </h4>
                  <div className="row ">
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="Masih sendiri"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="Sudah menikah, namun belum memiliki anak"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="Sudah menikah dan memiliki 1 anak"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="Sudah menikah dan memiliki 2 anak atau lebih"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 search"
                        id="text"
                        placeholder="Isi sendiri......"
                      />
                      <div className="row mt-5">
                        <div className="col-lg-2">
                          <NavLink to="/journey-one" className="back">
                            Kembali
                          </NavLink>
                        </div>
                        <div className="col-lg-6">
                          <NavLink to="/journey-three" className="ml-4 next">
                            Selanjutnya >
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <img src={images.Journey2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

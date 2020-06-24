import React from "react";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import NavbarDashboard from "../../components/NavbarDashboard";

import cardImg from "../../../public/assets/card-img.png";

const View = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <LeftSideBar />

        <div id="content-wrapper" class="d-flex flex-column">
          <NavbarDashboard />
          <div className=" main-dashboard">
            <h5 className="title">Portofolio</h5>
            <div className="row">
              <div className="col-lg-11half">
                <a href="#" className="url">
                  Semua
                </a>
                <a href="#" className="url">
                  Aktif
                </a>
                <a href="#" className="url">
                  Selesai
                </a>
                <div className="row ml-0">
                  <div className="col-lg-3 card-proyek-counter text-center mr-4">
                    <div className="row">
                      <div className="col text-center number ">1</div>
                    </div>
                    <div className="row">
                      <div className="col text-center">Proyek Aktif</div>
                    </div>
                    <div className="row">
                      <div className="col text-center number">2</div>
                    </div>
                    <div className="row">
                      <div className="col text-center">Proyek Selesai</div>
                    </div>
                    <div className="row">
                      <div className="col text-center number">3</div>
                    </div>
                    <div className="row">
                      <div className="col text-center">Total Proyek</div>
                    </div>
                  </div>

                  <div className="col-lg-3 card-list mr-4">
                    <div className="title-active">Aktif</div>
                    <h5 className="card-title pl-3 pt-1 ">
                      Panorama Cihanjuang
                    </h5>
                    <img src={cardImg} className="card-img" alt="" />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">saldo</div>
                      </div>
                      <div className="row mt-1">
                        <div className="col">
                          <span className="idr">Rp2.000.000,00</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col"> Simulasi pendapatan</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Rp2.200.000 - Rp2.400.000</span>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-sm-5 pl-3 px-0 light-button">
                          <a href="#">Cek laman</a>
                        </div>
                        <div className="col-sm-6 pl-2 dark-button">
                          <a href="#">Perkembangan</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 card-list mr-4">
                    <div className="title-done ">Selesai</div>
                    <h5 className="card-title pl-3 pt-1 ">Cluster Linaya</h5>
                    <img src={cardImg} className="card-img" alt="" />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">saldo</div>
                      </div>
                      <div className="row mt-1">
                        <div className="col">
                          <span className="idr">Rp5.000.000,00</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col"> Simulasi pendapatan</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Rp5.600.000,00</span>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-sm-5 pl-3 px-0 light-button">
                          <a href="#">Cek laman</a>
                        </div>
                        <div className="col-sm-6 pl-2 dark-button">
                          <a href="#">Perkembangan</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-11half">
                <div className="row ml-0">
                  <div className="col-lg-3 card-list mr-4">
                    <div className="title-done">Selesai</div>
                    <h5 className="card-title pl-2 pt-1 ">
                      Serenity Residence Bandung
                    </h5>
                    <img src={cardImg} className="card-img" alt="" />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">saldo</div>
                      </div>
                      <div className="row mt-1">
                        <div className="col">
                          <span className="idr">Rp2.000.000,00</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col"> Simulasi pendapatan</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Rp3.300.000,00</span>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-sm-5 pl-3 px-0 light-button">
                          <a href="#">Cek laman</a>
                        </div>
                        <div className="col-sm-6 pl-2 dark-button">
                          <a href="#">Perkembangan</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSideBar />
      </div>
    </React.Fragment>
  );
};

export default View;

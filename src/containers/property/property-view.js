import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../components";
import { Progress } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const View = ({ projects }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <section id="properti">
          <div className="coverer">
            <div className="row">
              <div className="col-lg-4 filter ml-5">
                <div className="row ml-1">
                  <h5 className="mt-3">
                    <b>Filter</b>
                  </h5>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Status</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-md-3">
                    <a href="#" className="mr-2 btn-filter">
                      Aktif
                    </a>
                    <a href="#" className="btn-filter">
                      Selesai
                    </a>
                  </div>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Lokasi</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-md-3">
                    <a href="#" className="btn-filter">
                      Jakarta
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#" className="btn-filter">
                      Bandung
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#" className="btn-filter">
                      Malang
                    </a>
                  </div>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Harga 1 Slot</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-lg-5">
                    <a href="#" className="btn-filter">
                      Rp1.000.000
                    </a>
                  </div>
                  <div className="col-lg-5">
                    <a href="#" className="btn-filter">
                      Rp10.000.000
                    </a>
                  </div>
                  <div className="col-lg-5">
                    <a href="#" className="btn-filter">
                      Rp5.000.000
                    </a>
                  </div>
                  <div className="col-lg-5">
                    <a href="#" className="btn-filter">
                      Rp20.000.000
                    </a>
                  </div>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Periode</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-md-12 align-items-start">
                    <a href="#" className="mr-2 btn-filter">
                      3 Bulan
                    </a>
                    <a href="#" className="mr-2 btn-filter">
                      6 Bulan
                    </a>
                    <a href="#" className="mr-2 btn-filter">
                      1 Tahun
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ml-4">
                <h5 className="ml-2">
                  <b>Daftar properti</b>
                </h5>
                <div className="row">
                  {projects.map((item, key) => (
                    <div
                      className="card-properti ml-0 mr-3 col-md-3"
                      style={{
                        backgroundImage: `url(${item.cover_picture.image_medium_cover})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <NavLink to={`/detail-properti/${item.slug}`} className="card-link">
                        <div className="row">
                          <div className="col d-flex flex-row-reverse d-flex align-items-start">
                            <span className="status">{item.status}</span>
                          </div>
                        </div>
                        <div className="row ml-0 content">
                          <div className="col d-flex align-center-end location">
                          <EnvironmentOutlined twoToneColor="#ff0000" className="mr-1"/> {item.city.name}, Indonesia
                          </div>
                        </div>
                        <div className="row ml-0">
                          <div className="col ">{item.title}</div>
                        </div>
                        <div className="row ml-0 mt-1">
                          <div className="col-md-8 "> Rp {item.collected} / {item.target} Juta</div>
                          <div className="col-md-2 mr-2">{item.persentage}%</div>
                        </div>
                        <div className="row ml-0">
                          <Progress percent={item.persentage} showInfo={false} />
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

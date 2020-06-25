import React from "react";
import { Navbar } from "../../components";
import { Progress, InputNumber } from "antd";
import { FileFilled } from "@ant-design/icons";
import { images } from "../../config"

const View = ({project}) => {
  console.log(project)
  return (
    <div>
      <Navbar />
      <section id="properti">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="galery">gallery</div>
              <div className="description mt-4">
                <h5>
                  <span>{project.title}</span>
                </h5>
                <p className="text-justify">
                  {project.overview}
                </p>

                <p className="mt-5 mb-3">
                  Document :{" "}
                  <span>
                    <FileFilled /> Prospectus Projek Cluster Lanaya
                    InvesProperti.id
                  </span>{" "}
                  <a href="#" className="ml-3">
                    Unduh
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="investment">
                Investasi Sekarang
                <div className="row nominal mt-4">
                  <div className="col sm-3">
                    <h2 className="mb-0 ml-2">{project.persentage}%</h2>
                    <Progress percent={project.persentage} showInfo={false} className="mt-0" />
                  </div>
                  <div className="col sm-3 ml-3">
                    <h2 className="mb-0 ">40</h2>
                    Sisa Slot
                  </div>
                  <div className="col sm-3">
                    <h2 className="mb-0">40</h2>
                    Sisa Hari
                  </div>
                  <div className="col sm-3 mt-1">
                    <b>{project.collected} Juta / Rp{project.target} Juta </b>
                    <br /> tercapai
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col sm-4">
                    Jumlah slot
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={3}
                      className="search"
                    />
                  </div>
                  <div className="col sm-4">
                    <br />
                    Harga 1 slot IDR 1.000.000
                  </div>
                  <div className="col sm-4">
                    <br />
                    Imbang Bagi Hasil 7,5% - 9%
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col text-center">
                    <h2 className="mb-0">
                      <span>IDR 4.000.000</span>
                    </h2>
                    Imbal Hasil Investasi selama 6 Bulan
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col text-center">
                    <h5 className="mb-0">
                      <span>IDR 4.350.000 - IDR 4.450.000</span>
                    </h5>
                    Perkiraan Total Pengembalian
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col text-center">
                    <a href="#"> Inves Sekarang</a>
                  </div>
                </div>
              </div>
              <div className="developer mt-4">
                Tentang Developer
                <img
                  src={images.delution_logo}
                  style={{
                    width: 150,
                    objectFit: "contain",
                    float: "right",
                  }}
                  alt=""
                />
                <p className="mt-3">
                  <span>Vortiland - Delution Enterprise</span>
                </p>
                <p className="text-justify">
                  Vortiland bagian dari Delution Enterprise (Holding). Delution
                  Entreprise memiliki 4 anak perusahaan, yaitu Delution
                  Architect (Konsultan Perencanaan Arsitektur & Interior), CRI
                  (Kontraktor Bangunan dan Interior), Onel (Furnishing), dan
                  Vortiland (Developer Property). Karakter dari proyek Delution
                  adalan arsitektur ikonik. Beberapa proyek yang pernah
                  dikerjakan delution antara lain: Kantor Traveloka, Kantor DPD
                  Golkar Jakarta, Kantor BBDO Indonesia dan Splow House.
                </p>
                <a href="#">Cari Tahu Selengkapnya</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mt-4">
              <div className="developer ">
                Lokasi Proyek
                <div className="row">
                  <div className="col-md-8">
                    <img src={images.map} className="maps" alt="" />
                  </div>
                  <div className="col-md-4">
                    <img
                      src={images.map}
                      style={{ objectFit: "contain", width: 150 }}
                      alt=""
                    />
                    {project.address}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4">
              <div className="developer">
                <div className="row">
                  <div className="col-md-8">Image</div>
                  <div className="col-md-4">Share Proyek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default View;

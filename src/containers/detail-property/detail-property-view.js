import React from "react";
import { Navbar } from "../../components";
import { Progress, InputNumber } from "antd";
import { FileFilled } from "@ant-design/icons";
import { images } from "../../config"
import { NavLink } from "react-router-dom";

const View = (props) => {
  let project = props.project
  return (
    <div>
      <Navbar />
      <section id="properti">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-9">
                  <img src={props.imgActive && props.imgActive['image_medium_cover']} className="galery img img-fluid" style={{objectFit: 'cover'}}/>
                </div>
                <div className="col-3" style={{height: 300, overflow: 'auto'}}>
                    { 
                    project.galleries && project.galleries.map((element, i) => (
                      <img src={element['image_small_square']} className="mb-2 galery mini-galery" onClick={() => props.setActiveImage(element) }/>                      
                    ))
                    }
                </div>
              </div>
              <div className="description mt-4">
                <h5>
                  <span>{project.title}</span>
                </h5>
                <div className="text-justify" dangerouslySetInnerHTML={{__html: unescape(project.overview)}} />                  

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
                      defaultValue={project.share_count}
                      className="search"
                      onChange={(e) => props.setSlotCount(e)}
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
                    <NavLink to={`/checkout/${project.slug}?slot=${props.slot}`}>Inves Sekarang</NavLink>
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
                <div className="text-justify" dangerouslySetInnerHTML={{__html: unescape(project.specification)}} />
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
                  <iframe frameBorder="0" width="100%" height="100%"  src={project.mapUrl}>
      </iframe>

                  </div>
                  <div className="col-md-4">
                    <img
                      src={images.Ilustrasi_rumah}
                      style={{ objectFit: "contain", width: 150 }}
                      className="mb-2"
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

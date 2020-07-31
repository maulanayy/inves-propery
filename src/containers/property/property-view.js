import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../components";
import { Progress } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const View = ({ cities, projects, setStatus, status, 
  setLokasi, lokasi, setHarga, harga, 
  setPeriode, periode, onSubmit, setKeyword }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <section id="properti">
          <div className="coverer container">
            <div className="row">
              <div className="col-lg-4 filter ml-5">
                <div className="row ml-1">
                  <h3 className="mt-3">
                    <b>Cari Properti</b>
                  </h3>
                  <div className="input-group mb-3 col-11 pl-1">
  <input type="text" className="form-control" placeholder="Masukkan kata kunci" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setKeyword(e.target.value)}/>
  <div className="input-group-append">
  <button className="btn" type="button" onClick={() => onSubmit()}><i className="fa fa-search"></i></button>

  </div>
</div>
                </div>
                <div className="row ml-1">
                  <h4 className="mt-3">
                    <b>Filter</b>
                  </h4>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Status</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-md-6">
                    <button className={`mr-2 btn-filter ${status === 'aktif' ? 'active' : ''}`} onClick={() => setStatus(status === 'aktif' ? '' : 'aktif')}>
                      Aktif
                    </button>
                    <button className={`btn-filter ${status === 'selesai' ? 'active' : ''}`} onClick={() => setStatus(status === 'selesai' ? '' : 'selesai')}>
                      Selesai
                    </button>
                  </div>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Lokasi</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  {
                    cities && cities.map((item, key) => (
                      <div className="col-md-3" key={key}>
                        <button className={`btn-filter ${lokasi === item.id ? 'active' : ''}`} onClick={() => setLokasi(lokasi === item.id ? '' : item.id)}>
                          {item.name}
                        </button>
                      </div>
                    ))
                  }                  
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Harga 1 Slot</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-lg-5">
                    <button className={`btn-filter ${harga === '1000000' ? 'active' : ''}`} onClick={() => setHarga(harga === '1000000' ? '' : '1000000')}>
                      Rp1.000.000
                    </button>
                  </div>
                  <div className="col-lg-5">
                    <button className={`btn-filter ${harga === '10000000' ? 'active' : ''}`} onClick={() => setHarga(harga === '10000000' ? '' : '10000000')}>
                      Rp10.000.000
                    </button>
                  </div>
                  <div className="col-lg-5">
                    <button className={`btn-filter ${harga === '5000000' ? 'active' : ''}`} onClick={() => setHarga(harga === '5000000' ? '' : '5000000')}>
                      Rp5.000.000
                    </button>
                  </div>
                  <div className="col-lg-5">
                    <button className={`btn-filter ${harga === '20000000' ? 'active' : ''}`} onClick={() => setHarga(harga === '20000000' ? '' : '20000000')}>
                      Rp20.000.000
                    </button>
                  </div>
                </div>
                <div className="row ml-1">
                  <h6>
                    <b>Periode</b>
                  </h6>
                </div>
                <div className="row ml-1">
                  <div className="col-md-12 align-items-start">
                    <button className={`mr-2 btn-filter ${periode === '3 bulan' ? 'active' : ''}`} onClick={() => setPeriode(periode === '3 bulan' ? '' : '3 bulan')}>
                      3 Bulan
                    </button>
                    <button className={`mr-2 btn-filter ${periode === '6 bulan' ? 'active' : ''}`} onClick={() => setPeriode(periode === '6 bulan' ? '' : '6 bulan')}>
                      6 Bulan
                    </button>
                    <button className={`mr-2 btn-filter ${periode === '1 tahun' ? 'active' : ''}`} onClick={() => setPeriode(periode === '1 tahun' ? '' : '1 tahun')}>
                      1 Tahun
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ml-3">
                <h5 className="ml-3">
                  <b>Daftar properti</b>
                </h5>
                <div className="row ml-0">
                  {projects.map((item, key) => (
                    <div className="col-md-4" key={key}>
                    <div
                      className="card-properti p-1 m-0"
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
                        <div className="row ml-0 pb-3">
                          <Progress percent={item.persentage} showInfo={false} />
                        </div>
                      </NavLink>
                    </div>
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

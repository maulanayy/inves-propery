import React from "react";
import { Navbar } from "../../components";
import { Input } from "antd";

const View = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <section id="section-one">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h2>Daftarkan Proyek Anda</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label>Email</label>
                <Input name="email" />
              </div>
              <div className="col-12 col-lg-6">
                <label>Kapan Anda Membutuhkan Dana ?</label>
                <Input name="email" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label>Nama Lengkap</label>
                <Input name="email" />
              </div>
              <div className="col-12 col-lg-6">
                <label>Estimasi Durasi</label>
                <Input name="email" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label>No Hp</label>
                <Input name="email" />
              </div>
              <div className="col-12 col-lg-6">
                <label>Dari mana tahu InvesProperti.id ?</label>
                <Input name="email" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label>Perusahaan</label>
                <Input name="email" />

                <label>Jumlah Dana yang dibutuhkan</label>
                <Input name="email" />
              </div>
              <div className="col-12 col-lg-6">
                <label>Dari mana tahu InvesProperti.id ?</label>
                <Input name="email" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

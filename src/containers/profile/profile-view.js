import React from "react";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import NavbarDashboard from "../../components/NavbarDashboard";

import { Input, Select } from "antd";
const { Option } = Select;

const View = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <LeftSideBar />

        <div id="content-wrapper" class="d-flex flex-column">
          <NavbarDashboard />
          <div className=" main-dashboard">
            <h5 className="title">Profil</h5>
            <div className="row ">
              <div className="col-lg-10 card-info">
                <form>
                  <div className="row">
                    <div className="col-lg-5">
                      <label>Nama Lengkap</label>
                      <Input name="nama" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <label>Tanggal</label>
                      <Select defaultValue="20">
                        <Option value="20">20</Option>
                      </Select>
                    </div>
                    <div className="col-md-1">
                      <label>Bulan</label>
                      <Select defaultValue="20">
                        <Option value="20">2</Option>
                      </Select>
                    </div>
                    <div className="col-md-1">
                      <label>Tahun</label>
                      <Select defaultValue="20">
                        <Option value="20">1993</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <label>No Telepon</label>
                      <Input name="telp" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <label>Profinsi</label>
                      <Input name="prov" />
                    </div>
                    <div className="col-lg-3">
                      <label>Kota</label>
                      <Input name="city" />
                    </div>
                    <div className="col-lg-5half">
                      <label>Alamat</label>
                      <Input name="address" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <label>No Ktp</label>
                      <Input name="ktp" />
                    </div>
                    <div className="col-lg-6">
                      <label>Unggah Scan KTP</label>
                      <Input name="file-ktp" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <label>No NPWP</label>
                      <Input name="ktp" />
                    </div>
                    <div className="col-lg-6">
                      <label>Unggah Scan NPWP</label>
                      <Input name="file-npwp" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <a className="button">Simpan</a>
                    </div>
                  </div>
                </form>
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

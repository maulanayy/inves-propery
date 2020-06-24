import React from "react";
import {
  LeftSideBar,
  RightSideBar,
  NavbarDashboard,
} from "../../components";

import { Table } from "antd";
// import bannerImg from "../../../public/assets/asset-25.png";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
  },
  {
    title: "Tipe Transaksi",
    dataIndex: "tipe_transaksi",
    key: "tipe_transaksi",
  },
  {
    title: "Nama Properti",
    dataIndex: "nama_properti",
    key: "nama_properti",
  },
  {
    title: "Jumlah",
    dataIndex: "jumlah",
    key: "jumlah",
  },
];

const dataSource = [
  {
    key: "1",
    no: "1",
    tanggal: "11 april 2020",
    tipe_transaksi: "basah",
    nama_properti: "inves properti",
    jumlah: "100000",
  },
];

const View = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <LeftSideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <NavbarDashboard />
          <div className="main-dashboard">
            <h5 className="title">Dashboard</h5>
            <div className="banner">
              <p>
                Kejar Mimpimu, <br />
                Mulai Investasi Sekarang! <br />
                <a href="#" className="banner-button">
                  Mulai >
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col-md-5half card-balance">
                <div className="row ">
                  <div className="col-sm-5 my-auto">Saldo Proyek</div>
                  <div className="col-sm-6 ml-4 ">IDR 40.000.000</div>
                </div>
                <div className="row">
                  <div className="col-sm-5 mt-3">Saldo Affiliate</div>
                  <div className="col-sm-6 ml-4 mt-3">IDR 2.000.000</div>
                </div>
              </div>
              <div className="col-md-5half card-balance">
                <div className="row ">
                  <div className="col-sm-12">Total Saldo</div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-3 idr">IDR 42.000.000</div>
                  <div className="col-sm-5 ml-1 mt-2 ">
                    <a href="#" className="withdraw-button">
                      Withdraw
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-lg-11half card-info">
                Riwayat Transaksi
                <Table dataSource={dataSource} columns={columns} />
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

import React from "react";
import { Navbar } from "../../components";
import { images } from "../../config";
import { NavLink } from "react-router-dom";

const Views = () => {
    return (
      <div>
        <Navbar />
        <section id="section-one">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 info ">
                    <div>
                    <h4>
                        <span>Terima kasih telah berinvestasi di Invesproperti.id</span>
                    </h4>
                    <p>
                    Silahkan selesaikan pembayaran Anda, silahkan cek halaman portofolio
untuk melihat perkembangan proyek properti. Anda ingin investasi lagi?
Silahkan kunjungi halaman daftar properti.
                    </p>
                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            <NavLink to="/dashboard" className="start-button mr-3">Lihat Portofolio</NavLink>
                            <NavLink to="/properti" className="start-button start-button-border">Daftar Properti</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 ">
                    <img src={images.handshake} className="img-fluid" alt="" />
                </div>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Views;
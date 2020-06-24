import React from "react";
import { Navbar } from "../../components";
import IntroOne from "../../../public/assets/group_presentation.png";
import IntroTwo from "../../../public/assets/Intro2.png";

const View = () => {
  return (
    <div>
      <Navbar />
      <section id="section-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span>Tentang Invesproperti.id</span>
              </h2>
              <h4>Make property accessible for everyone</h4>

              <p>
                Invesproperti.id adalah platform crowdfunding syariah di
                Indonesia yang berfokus terhadap investasi di bidang properti.
                Visi kami adalah memberikan kemudahan bagi setiap orang untuk
                mendapatkan keuntungan dalam investasi properti.
              </p>
              <p>
                Cerita kami berawal dari melihat investasi properti yang
                menawarkan keuntungan yang tinggi. Investasi properti menawarkan
                ROI (Return of Investment) jauh di atas deposito, emas ataupun
                reksadana. Selain itu investasi properti memiliki resiko yang
                relatif rendah karena harga properti yang terus naik. Kendalanya
                adalah tidak setiap orang bisa mengakses karena entry barrier
                yang tinggi. Kami percaya dengan Teknologi dan sistem
                crowdfunding akan membantu siapa saja untuk menikmati keuntungan
                berinvestasi di bidang properti. Selain itu Invesproperti.id
                memiliki mimpi besar untuk berkontribusi dalam pembangunan
                Indonesia karena industri properti melibatkan 170 subsektor
                industri turunan. Dengan crowdfunding masyarakat juga bisa ikut
                andil dalam pembangunan dalam negeri.
              </p>
              <p>
                Invesproperti.id, sepenuhnya menggunakan sistem bagi hasil.
                Semua proyek dan unit properti yang ada di website sudah melalui
                kriteria yang ketat oleh tim kami kami yang berpengalaman
              </p>
            </div>
            <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 ">
              <img src={IntroOne} className="img-fluid mt-4" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="our-team">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-3 mr-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
                </div>
              </div>
            </div>

            <div className="col-3 ml-5 mr-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
                </div>
              </div>
            </div>
            <div className="col-3 ml-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
                </div>
              </div>
            </div>

            <div className="col-3 mr-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
                </div>
              </div>
            </div>

            <div className="col-3 ml-5 mr-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
                </div>
              </div>
            </div>
            <div className="col-3 ml-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <img src={IntroTwo} className="card-img-top about-profile" alt=""/>
                  <h5 className="card-title">
                    <span>Basytyan K. Pratama</span>
                  </h5>
                  <h6 className="card-subtitle">Chief Executive Officer</h6>
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

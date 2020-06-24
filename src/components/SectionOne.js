import React from "react";

import IntroOne from "../../public/assets/intro1.png";
import LogoOjk from "../../public/assets/logo/LogoOJK.png";
import LogoCertified from "../../public/assets/logo/LogoCertified.png";

const SectionOne = () => {
  return (
    <section id="section-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 info ">
            <div>
              <h4>
                Mulai Bisnis <span>Investasi Properti Anda</span> Sekarang
              </h4>
              <p>
              Anda bisa mulai investasi properti dengan mudah dan aman mulai 
              dengan 1 juta rupiah. Nikmati passive income dan kenaikan berlipat 
              harga properti Anda.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#" className="start-button">
                    Mulai Sekarang
                  </a>
                  <img src={LogoOjk} className="ojk" alt="" />
                  <img src={LogoCertified} className="certified" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 ">
            <img src={IntroOne} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

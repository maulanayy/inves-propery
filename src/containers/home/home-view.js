import React from "react";
import ReactCardCarousel from "react-card-carousel";
import {
  Navbar,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionTen,
  Graph,
  Properties,
} from "../../components";

import Logo from "../../../public/assets/logo/logo.png";
import ImgSecFour from "../../../public/assets/img-sec-4.png";
import AssetThree from "../../../public/assets/asset-3.png";
import AssetFive from "../../../public/assets/asset-5.png";
import AssetTwo from "../../../public/assets/asset-2.png";

import { NavLink } from "react-router-dom";
import { Carousel } from "antd";

const Views = ({ statistics, supports, opinions, projects }) => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <section id="section-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-justify ">
              <h4 className="ml-5">
                Simulasi Kenaikan <span>Investasi Properti</span>
              </h4>
              <Graph />
            </div>
            <div className="col-lg-3 ml-5 mt-5">
              <img
                src={ImgSecFour}
                className="align-bottom"
                style={{
                  width: 205,
                  height: 319,
                  objectFit: "contain",
                  marginTop: 20,
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section-five">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="font-weight-bold mb-0">
                Cari Properti Pilihan Anda
              </h3>
              <h4
                style={{
                  color: "#045c36",
                }}
                className="font-weight-bold"
              >
                Popular Properti
              </h4>
              <Properties projects={projects} />
              <NavLink to="/properti">
                {" "}
                <h4
                  style={{
                    color: "#045c36",
                  }}
                  className="font-weight-bold text-right mt-1"
                >
                  Lihat Selengkapnya
                </h4>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section id="section-six" className="container-border">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center title">Capaian Kami</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center count-number title">
              <h1 className="number">
                <span>{statistics.memberCount}</span>
              </h1>
              <h4>Investor Terdaftar</h4>
            </div>
            <div className="col-lg-4 text-center count-number title">
              <h1 className="number">
                <span>{statistics.projectCount}</span>
              </h1>
              <h4>Properti</h4>
            </div>
            <div className="col-lg-4 text-center count-number title">
              <h1 className="number">
                <span>{statistics.investSum}M</span>
              </h1>
              <h4>Modal Terkumpul</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="section-seven">
        <div className="container">
          <div className="row">
            <div className="col-lg-10  text-right">
              <h2>
                <img
                  src={AssetTwo}
                  className="content-fluid"
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 15,
                  }}
                  alt=""
                />
                Apa Kata <span>Mereka?</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Carousel autoplay>
                {opinions.map((item, key) => (
                  <div>
                    <div className="row mb-0 justify-content-md-center">
                      <div className="col-lg-4 mr-2">
                        <img
                          src={item.image}
                          className="img-fluid mt-5 author-img"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-5 ml-1">
                        <p className="testimonials">{item.highlight}</p>
                        <p className="author">
                          <span>
                            - {item.title} <br />
                            {item.subtitle}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section id="section-eight">
        <div className="container">
          <h2 className="text-center video-carousel">
            Video <span>Testimonial</span>
          </h2>
          <div className="row mt-5">
            <div className="col ">
              <ReactCardCarousel
                autoplay={false}
                autoplay_speed={2500}
                disable_box_shadow={true}
                spread={"wide"}
              >
                <div className="video-card"></div>
                <div className="video-card">Second Card</div>
                <div className="video-card">Third Card</div>
              </ReactCardCarousel>
            </div>
          </div>
        </div>
      </section>

      <section id="section-nine">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-lg-0 ">
              <div>
                <h4>
                  <span>Butuh Dana </span> untuk Proyek
                  <br />
                  Menarik Anda ?
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="start-button">
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-lg-flex flex-lg-column justify-content-top align-items-stretch pt-5 pt-lg-0">
              <img
                src={AssetThree}
                className="img-fluid"
                style={{
                  width: "90%",
                  height: "90%",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <SectionTen supports={supports} />

      <section className="section-eleven">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                <span>Diliput</span> Oleh
              </h2>
              Courosel
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <img src={AssetFive} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <div className="row">
                <img src={Logo} className="img-fluid logo" alt="" />
                <div className="pt">PT Berkah Inovasi Nusantara 2020</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 contact">
              <div className="row">
                <span>Kontak Kami</span>
                <p>
                  Menara Bandung Digital Valley, Jl.Gegerkalong Hilir No.47,
                  <br />
                  Sukarasa, Kec.Sukasari, Kota bandung, Jawa Barata 40152 <br />{" "}
                  <br />
                  support@invesproperti.id <br /> <br />
                  085722159221
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Views;

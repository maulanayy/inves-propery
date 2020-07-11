import React from "react";
import { Navbar } from "../../components";
import { images } from "../../config"
// import {default as IntroOne} from "../../../public/assets/group_presentation.png";
// import {default as IntroTwo} from "../../../public/assets/Intro2.png";


const View = () => {
  return (
    <div>
      <Navbar />
      <section id="section-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span>Cara Kerja Invesproperti.id</span>
              </h2>
              
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>              
            </div>
            <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 ">
              <img src={images.howItWorks1} className="img-fluid mt-4" alt="" />
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
                  <img src={images.IntroTwo} className="card-img-top about-profile" alt=""/>
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
                  <img src={images.howi} className="card-img-top about-profile" alt=""/>
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
                  <img src={images.IntroTwo} className="card-img-top about-profile" alt=""/>
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
                  <img src={images.IntroTwo} className="card-img-top about-profile" alt=""/>
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
                  <img src={images.IntroTwo} className="card-img-top about-profile" alt=""/>
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
                  <img src={images.IntroTwo} className="card-img-top about-profile" alt=""/>
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

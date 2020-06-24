import React from "react";
import Header from "../../components/Navbar";
import Ilustrasi from "../../../public/assets/illustrasi.png";
import { Collapse } from "antd";

const { Panel } = Collapse;


const View = ({ faqs }) => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <section id="section-one">
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 d-lg-flex flex-lg-column text-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 info">
                <div>
                  <h1 className="mb-0">FAQ</h1>
                  <h4>
                    Frequently Asked <span>Questions</span>
                  </h4>

                  <div className="row ">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="form-control search mx-auto"
                        id="text"
                        placeholder="Cari Informasi"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2">
                <img src={Ilustrasi} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        {faqs.map((item) => (
          <section id="section-faq">
            <div className="container container-border">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="pt-4 pl-3">{item.faq_category_id}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Collapse className="mx-auto mt-2 panel">
                    <Panel
                      header={item.question}
                      key="1"
                      className="content-box"
                    >
                      <p>{item.answer}</p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </React.Fragment>
  );
};

export default View;

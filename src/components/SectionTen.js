import React from "react";

const SectionTen = ({ supports }) => {
  return (
    <section id="section-ten">
      <div className="container item-content">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="title">
              <span>Didukung</span> Oleh
            </h2>

            <div className="row">
              {supports.map((item, key) => (
                <div className="col" key={key}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="logo-square"
                    key={item.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;

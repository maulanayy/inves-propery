import React from "react";
import { Progress } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";


const Properties = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((item, key) => (
        <div
          className="card-properti ml-0 mr-3 col-md-3half"
          style={{
            backgroundImage: `url(${item.cover_picture.image_medium_cover})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col d-flex flex-row-reverse d-flex align-items-start">
              <span className="status">{item.status}</span>
            </div>
          </div>
          <div className="row ml-0 content">
            <div className="col d-flex align-center-end location">
            <EnvironmentOutlined twoToneColor="#ff0000" className="mr-1"/> {item.city.name},
              Indonesia
            </div>
          </div>
          <div className="row ml-0">
            <div className="col mt-1">{item.title}</div>
          </div>
          <div className="row ml-0 mt-1">
            <div className="col-md-9 ">
              Rp {item.collected} / {item.target} Juta
            </div>
            <div className="col-md-2 mr-2">{item.persentage}%</div>
          </div>
          <div className="row ml-0">
            <Progress percent={item.persentage} showInfo={false} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;

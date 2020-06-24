import React from "react";
import { Modal } from "antd";


const password = ({ handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={handleOk()}
      onCancel={handleCancel()}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

// const password = () => {
//   const title = `Anda yakin akan menghapus  ?`;
//   confirm({
//     title,
//     okText: "Ya",
//     okType: "danger",
//     cancelText: "Batal"
//     }
//   );
// };

export default password;

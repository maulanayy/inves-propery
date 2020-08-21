import React from "react";
import { Navbar } from "../../components";
import { Form, Input, Button, Alert } from 'antd';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 28 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 2 },
};
const View = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <section id="section-one">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h2>Daftarkan Proyek Anda</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  layout={'inline'}
                  onFinish={(e) => props.onSubmit(e)}
                  onFinishFailed={(e) => props.onSubmitFailed(e)}
                >
                  {
                      props.error_message === '' ? null : <div className="md-form mb-5">
                      <Alert message={props.error_message} type="error" closable></Alert>
                    </div>
                    }
                    

                  <div className="col-6">
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input placeholder="Email" type={'email'} />
                    </Form.Item>

                    <Form.Item
                      name="full_name"
                      rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                      <Input placeholder="Nama Lengkap" />
                    </Form.Item>
                    <Form.Item
                      name="no_hp"
                      rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                      <Input placeholder="No HP"/>
                    </Form.Item>
                    <Form.Item
                      name="company"
                      
                    >
                      <Input placeholder="Perusahaan (Opsional)"/>
                    </Form.Item>
                    <Form.Item
                      
                      name="cost"
                      rules={[{ required: true, message: 'Please input this field!' }]}
                    >
                      <Input placeholder="Jumlah Dana yang Dibutuhkan"/>
                    </Form.Item>
                  </div>
                  <div className="col-6">
                    <Form.Item
                      
                      name="time_needed"
                      rules={[{ required: true, message: 'Please input this field!' }]}
                    >
                      <Input placeholder="Kapan Anda Membutuhkan Dana ?" />
                    </Form.Item>
                    <Form.Item
                      
                      name="duration"
                      rules={[{ required: true, message: "Please input duration's estimation!" }]}
                    >
                      <Input placeholder="Estimasi Durasi" />
                    </Form.Item>
                    <Form.Item
                      
                      name="referrer"
                      rules={[{ required: true, message: 'Please input this field!' }]}
                    >
                      <Input placeholder="Dari mana tahu InvesProperti.id" />
                    </Form.Item>
                    <Form.Item
                      name="desc"
                      rules={[{ required: true, message: 'Please input project description!' }]}
                    >
                      <TextArea placeholder="Deskripsi Proyek" style={{height: 88}}/>
                    </Form.Item>
                  </div>
                  
                  <div className="col-12">
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className="btn button btn-primary">
                      Kirim
                    </Button>
                  </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default View;

import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Form, Alert, Button } from "antd";

import LoadingOverlay from 'react-loading-overlay';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 28 },
};

const View = (props) => {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <section id="section-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 ">
                <div className="form">
                  <p className="text-left forgot">
                    {" "}
                    <NavLink to="/login" className="back">
                      <i className="fa fa-arrow-left"/> Kembali
                    </NavLink>
                  </p>
                  <h3 className="mb-0">
                    <span>Lupa</span> Password ?
                  </h3>
                  Masukan email yang telah terdaftar
                  <Form
                  {...layout}
                  layout={'vertical'}
                  onFinish={(e) => props.onSubmit(e)}
                  onFinishFailed={(e) => console.log(e)}
                  className='mt-5'
                  >
                    {
                      props.error_message === '' ? null : <div className="md-form mb-5">
                      <Alert message={props.error_message} type="error" closable></Alert>
                    </div>
                    }

                    <Form.Item 
                        label="Email"
                        name="email" 
                        style={{marginBottom: '10px'}}
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                            {
                            required: true,
                            message: 'Please input email',
                            },
                        ]}>
                        <Input placeholder="Masukan Email" className='form-control' />
                    </Form.Item>
                    <div className="justify-content-center text-center">
                        <br />
                        <Form.Item >
                          
                        <Button type="primary" htmlType="submit"
                        className='btn button mb-5'
                        >Kirim</Button>
                        </Form.Item>
                        
                      </div>

                  </Form>                  
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2">
                <img src={images.Lupa} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <LoadingOverlay
        active={props.isLoading}
        spinner
        text='Loading...'
        >
      </LoadingOverlay>
    </React.Fragment>
  );
};

export default View;

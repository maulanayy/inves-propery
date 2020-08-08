import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Button, Alert, Form } from "antd";
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
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch pt-5 order-2 order-lg-1 mt-5">
                <div className="form">
                  <h3>
                    <span> Selamat Datang</span>
                    <br />
                    Kembali
                  </h3>
                  <Form                
                    {...layout}
                    layout={'vertical'}
                    onFinish={(e) => props.onSubmit(e)}
                    onFinishFailed={(e) => console.log(e)}
                    >
                      {
                        props.error_message == '' ? null : <div className="md-form mb-5">
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
                      <Form.Item 
                        label="Password"
                        name="password" 
                        rules={[
                            {
                            required: true,
                            message: 'Please input password',
                            },
                        ]}>
                        <Input.Password placeholder="Masukan password" className='form-control' />
                      </Form.Item>
                      <p className="forgot mt-4">
                        {" "}
                        <NavLink to="/forgot-password">
                          <span>Lupa Password</span>
                        </NavLink>
                      </p>
                      <div className="justify-content-center text-center">
                        <br />
                        <Form.Item >
                          
                        <Button type="primary" htmlType="submit"
                        className='btn button mb-5'
                        >Masuk</Button>
                        </Form.Item>
                        
                        <br />
                        Belum memiliki akun?
                        <NavLink to="/register">
                          <span> Daftar</span>
                        </NavLink>
                      </div>
                    </Form>
                  
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2">
                <img src={images.AssetSix} className="img-fluid" alt="" />
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

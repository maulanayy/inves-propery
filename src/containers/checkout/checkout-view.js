import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Button, Alert, Form } from "antd";
import LoadingOverlay from 'react-loading-overlay';
import NumberFormat from 'react-number-format';


const View = (props) => {
    const project = props.project
    const slot = props.slot
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className="video-card card-featured checkout-card pt-1">
                        <div className="card mb-2 p-2">                
                            <p className="">Detail Investasi</p>
                            <div className="container">
                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Imbal Bagi Hasil </p>
                                </div>
                                <div className="col-7">
                                <p className="pb-0 mb-0">{project.roi}% - {project.roi_max}%</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Jumlah Slot </p>
                                </div>
                                <div className="col-7">
  <p className="pb-0 mb-0">{project.slot}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Harga </p>
                                </div>
                                <div className="col-7">
  <p className="pb-0 mb-0"><NumberFormat value={parseFloat(project.per_share_value)} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-5">
                                    
                                </div>
                                
                            </div>

                            <div className="row text-left">
                                <div className="col-12" style={{marginLeft: 15}}>
                                    <Form layout={'inline'}>
                                        <Form.Item name="voucher_code" 
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Please input voucher code',
                                            },
                                        ]}>
                                        <Input placeholder="Masukan kode voucher" />
                                        </Form.Item>
                                        <Button type="primary" className="btn button btn-primary m-0">Submit</Button>
                                    </Form>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>                  
                </div>
                <div className="col-5">
                    <div className="video-card card-featured checkout-card pt-1">
                        <div className="card mb-2 p-2">                
                            <p className="">Detail Pembayaran</p>
                            <div className="container">
                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Harga </p>
                                </div>
                                <div className="col-7">
                                <p className="pb-0 mb-0">
                                <NumberFormat value={parseFloat(project.per_share_value) * slot} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Diskon </p>
                                </div>
                                <div className="col-7">
                                <p className="pb-0 mb-0">Rp0,00</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="pb-0 mb-0">Total Pembayaran </p>
                                </div>
                                <div className="col-7">
                                <p className="pb-0 mb-0">
                                <NumberFormat value={parseFloat(project.per_share_value) * slot} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                </p>
                                </div>
                            </div>


                            
                            </div>
                        </div>
                    </div>                  
                    <div className="col-12 text-center mt-4">
                    <Button type="primary" danger className="btn button pt-0 pb-0">
      Checkout
    </Button>
                    </div>
                    
                </div>
            </div>
        </div>
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

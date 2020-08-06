import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Button, Alert, Form, Modal, Table } from "antd";
import LoadingOverlay from 'react-loading-overlay';
import NumberFormat from 'react-number-format';


const View = (props) => {
    const project = props.project
    const paymentMethods = props.paymentMethods
    const slot = props.slot
    const defaultImg = 'data:image/png;base64,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'
    
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
                                    <Form 
                                    layout={'inline'} 
                                    onFinish={(e) => props.onSubmitVoucher(e)}>
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
                    <Button type="primary" danger className="btn button pt-0 pb-0" onClick={() => props.onCheckout() }>
      Checkout
    </Button>
                    </div>

                    <Modal 
                    visible={props.showModalPaymentMedhod} 
                    onCancel={() => props.onCloseModalPaymentMethod()}
                    footer={null} title={'Metode Pembayaran'}>
                        <div className="container">
                            {paymentMethods.data && paymentMethods.data.map(item => (
                                <div className="row"
                                    onClick={() => props.onSelectModalPaymentMethod(item) }
                                 key={item.id} style={{borderBottom: '1px solid #e3e6f0'}}>
                                    <div className="col-2">
                                        <img width={80}  className="img img-fluid"
                                        src={item.image || defaultImg} />
                                    </div>
                                    <div className="col-9 align-self-center">
                                        <h6>{item.title}</h6>
                                        {item.description ? <p className="mt-2">{item.description}</p> : null}
                                        
                                    </div>
                                    <div className="col-1 align-self-center">
                                        <i className="fa fa-chevron-right" style={{opacity: '0.5' }}/>
                                    </div>
                                </div>
                            ))}
                        </div>
               
                    </Modal>

                    <Modal 
                    visible={props.showModalPreviewCheckout} 
                    onCancel={() => props.onCloseModalPreviewCheckout()}
                    footer={[
                        <Button key="submit" type="primary" className="btn btn-primary  button" onClick={() => props.submitPayment()}>
                          Submit
                        </Button>,
                      ]}
                    title={props.selectedPaymentMethod.title}
                    className="checkout-modal"
                    >
                        <div className="container">
                            <div className="row" style={{borderBottom: '1px solid #e3e6f0'}}>
                                <div className="col-6 align-self-center">
                                    <p>Total Pembayaran</p>
                                    
                                </div>
                                <div className="col-6 align-self-center">
                            <h3 className="text-right"><NumberFormat value={parseFloat(props.project.per_share_value || 1) * parseInt(slot)} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></h3>
                                </div>
                            </div>
                        </div>
               
                    </Modal>
                    
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

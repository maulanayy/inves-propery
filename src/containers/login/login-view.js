import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Button } from "antd";
import LoadingOverlay from 'react-loading-overlay';


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
                  <form noValidate>
                    <div className="md-form">
                      <label>Email</label>
                      <Input placeholder="Email" type="email" name="email" 
                      className={props.validation ? (props.validation.email ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
                      onChange={(e) => props.textChanged('email', e.target.value)}
                      />
                      {
                      props.validation ? (props.validation.email ? '' : <div className='invalid-feedback'>Email tidak valid</div>) : '' 
                      } 

                      
                    </div>
                    <div className="md-form mt-3">
                      <label>Password</label>
                      <Input.Password placeholder="Password" name="pass" 
                      className={props.validation ? (props.validation.password ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
                      onChange={(e) => props.textChanged('password', e.target.value)} />
                      
                      {
                      props.validation ? (props.validation.password ? '' : <div className='invalid-feedback'>Password panjangnya harus 8-16 karakter</div>) : '' 
                      } 
                    </div>
                    <p className="forgot mt-4">
                      {" "}
                      <NavLink to="/forgot-password">
                        <span>Lupa Password</span>
                      </NavLink>
                    </p>
                    <div className="justify-content-center text-center">
                      <br />
                      <Button type="submit" 
                      className={(props.validation && props.validation.email && props.validation.password) ? 'btn button' : 'btn button disabled'} 
                      onClick={() => props.onSubmit()}
                      >Masuk</Button>
                      
                      {/* <button type="submit" className="btn btn-primary button">
                        Masuk
                      </button> */}
                      <br />
                      <br />
                      <br />
                      Belum memiliki akun?
                      <NavLink to="/register">
                        <span> Daftar</span>
                      </NavLink>
                    </div>
                  </form>
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

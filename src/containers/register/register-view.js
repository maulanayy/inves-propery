import React from "react";
import { Navbar } from "../../components";
import { NavLink } from "react-router-dom";
import { images } from "../../config"
import { Input, Button } from "antd";

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
                  <h3>
                    <span> Mulai Investasi Anda</span>
                    <p>Lengkapi data di bawah dan buat akun anda</p>
                  </h3>
                  <form>
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

                    <div className="md-form mt-1">
                      <label>Nama Lengkap</label>
                      <Input placeholder="Nama Lengkap" type="text" name="name" 
                      className={props.validation ? (props.validation.name ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
                      onChange={(e) => props.textChanged('name', e.target.value)}
                      />
                      {
                      props.validation ? (props.validation.name ? '' : <div className='invalid-feedback'>Nama Lengkap tidak valid</div>) : '' 
                      } 
                    </div>

                    <div className="md-form mt-1">
                      <label>Nomor Telepon</label>
                      <Input placeholder="Nomor Telepon" type="text" name="phone_number" 
                      className={props.validation ? (props.validation.phone_number ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
                      onChange={(e) => props.textChanged('phone_number', e.target.value)}
                      />
                      {
                      props.validation ? (props.validation.phone_number ? '' : <div className='invalid-feedback'>Nomor Telepon tidak valid</div>) : '' 
                      } 
                    </div>

                    <div className="md-form mt-1">
                      <label>Password</label>
                      <Input.Password placeholder="Password" name="pass" 
                      className={props.validation ? (props.validation.password ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
                      onChange={(e) => props.textChanged('password', e.target.value)} />
                      
                      {
                      props.validation ? (props.validation.password ? '' : <div className='invalid-feedback'>Password panjangnya harus 8-16 karakter</div>) : '' 
                      } 
                    </div>
                    <br />
                    <Button type="submit" 
                      className={(props.validation && props.validation.email && props.validation.password && props.validation.name && props.validation.phone_number) ? 'btn button' : 'btn button disabled'} 
                      onClick={() => props.onSubmit()}
                      >Daftar</Button>
                    Sudah memiliki akun ?{" "}
                    <NavLink to="/login">
                      <span>Masuk</span>
                    </NavLink>
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
    </React.Fragment>
  );
};

export default View;

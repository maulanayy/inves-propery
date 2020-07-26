import React, { Component } from "react";
import { images } from "../config";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { Modal, Input , Button, Alert} from "antd";
import { API } from "../config";
import axios from "axios";
import reducer_user from '../config/api-reducers/user';


// const showModal = () => {
//   password;
// };

class RightSideBar extends Component {
  state = {
    showModalPassword: false,
    validation: null,
    password: '',
    password_confirm: '',
    alert_message: null,
    alert_type: null,
    showSuccessPassword: false
  }

  textChanged = (field, value) => {
    let validation = this.state.validation || {}
    
    this.setState({[field]: value})
    switch(field){
      case 'current_password': 
        validation[field] = value.length >= 8
        this.setState({validation: validation})        
        break;
      case 'password': 
        validation[field] = value.length >= 8
        this.setState({validation: validation})        
        break;
      case 'password_confirm': 
        validation[field] = (this.state.password_confirm === this.state.password)
        this.setState({validation: validation})        
        break;
    }    
  }

  onSubmitPassword = async () => {
    console.log('onSubmitPassword')
    const state = this.state
    const props = this.props

    const params = {
      token: props.user.token, token_email: props.user.email, 
      current_password: state.current_password, password: state.password, confirm_password: state.password_confirm
    }
    const updateRequest = await API.account.changePassword(false, params);
    this.setState()
    if(updateRequest && updateRequest.result){
      this.setState({error_message: updateRequest.message, alert_type: 'success'})
      
      setTimeout(() => {
        this.setState({
          showModalPassword: false,          
          showSuccessPassword: true
        });
      }, 2000);
    }else{
      this.setState({error_message: updateRequest.message, alert_type: 'error'})
    }

  }

  showModal = (name) => {
    this.setState({
      [`showModal${name}`]: true,
    });
  };

  renderSuccessPassword(){
    return(<Modal 
      visible={this.state.showSuccessPassword}
      centered={true}      
      footer={null} 
           >
            <div className="text-center">
              <img src={images.passwordSaved} className="img-fluid" alt=""/>
              <h5 style={{fontWeight: 'bold'}}>Password Tersimpan</h5>
            </div>      
      </Modal>
      )
  }
  renderModalPassword(){
    const state = this.state;

    return(
      <Modal
          visible={state.showModalPassword}
          centered={true}
          footer={null} 
          // onOk={this.handleOk}
          // confirmLoading={confirmLoading}
          // onCancel={this.handleCancel}
        >
          
          <form noValidate>          
            {
              state.alert_message == null ? null : <div className="md-form mb-5">
              <Alert message={state.alert_message} type={state.alert_type} closable></Alert>
            </div>
            }

            <div className="md-form mt-3">
              <h5 className="text-center">Ubah Password</h5>
            </div>
            <div className="md-form mt-3">
              <Input.Password placeholder="Password Sekarang" name="pass" 
              className={state.validation ? (state.validation.current_password ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
              onChange={(e) => this.textChanged('current_password', e.target.value)} />              
              {
              state.validation ? (state.validation.current_password ? '' : <div className='invalid-feedback'>Password panjangnya harus 8-16 karakter</div>) : '' 
              } 
            </div>
            <div className="md-form mt-3">
              <Input.Password placeholder="Password Baru" name="pass" 
              className={state.validation ? (state.validation.password ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
              onChange={(e) => this.textChanged('password', e.target.value)} />              
              {
              state.validation ? (state.validation.password ? '' : <div className='invalid-feedback'>Password panjangnya harus 8-16 karakter</div>) : '' 
              } 
            </div>

            <div className="md-form mt-3">
              <Input.Password placeholder="Ulangi Password Baru" name="pass2" 
              className={state.validation ? (state.password === state.password_confirm ? 'form-control is-valid' : 'form-control is-invalid') : 'form-control' } 
              onChange={(e) => this.textChanged('password_confirm', e.target.value)} />              
              
              {
              state.password !== state.password_confirm ? <div className='invalid-feedback'>Password konfimasi harus sama</div> : '' 
              } 
            </div>
            <div className="justify-content-center text-center">
              <br />
              <Button type="submit" 
              className='btn button'
              onClick={() => this.onSubmitPassword()}
              >Simpan</Button>
          
            </div>
          </form>
        </Modal>
    )
  }

  openUploader = () => {
    document.getElementById('file-selfie').click()
  }

  onUploaded = (e) => {
    let file = e.target.files[0]

    if(file) {
      this.uploadSelfie(file)      
    }    
  }

  uploadSelfie = (file) => {
    const user = this.props.user;
    const state = this.state;
    
    var fd = new FormData();
    fd.set('token', user.token);
    fd.set('token_email', user.email);

    if(file){
      fd.set('picture', file);
    }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    axios.post(`${API.ROOT_URL}/user/profile`, fd, config)
      .then(response => {
          let result = response.data.result
          console.log('response is', result)
          this.props.update_user({picture: result.picture})                  
      }).catch(errors => {
        if (errors.response.status === 401) this.props.logout_user()
        console.log(errors.response.message)
        
      });


  }

  render(){
    const props = this.props;
    const user = props.user;

    return (
      <nav className="right-sidebar">
        { this.renderSuccessPassword() }
        { this.renderModalPassword() }
        <div className="right-sidebar-sticky">
          <div className="profile text-center ">
            <Input id="file-selfie" type="file" style={{display: 'none'}} onChange={(e) => this.onUploaded(e)}/>
            <div onClick={ () => this.openUploader()}>
            <img src={user.picture || images.profileImg} className="img-fluid rounded-circle img-thumbnail" alt=""/>
            <div className="plusIcon" style={{marginTop: '-40px',
    marginLeft: '120px', marginBottom: 40, color: '#3cba92'}}><i className="fa fa-plus-circle fa-2x"></i></div>
    </div>
            <p>
              { user.name } <br />
              { user.email } <br />
              <NavLink to="#" onClick={() => this.showModal('Password') }>
                <span>Ubah Password</span>
              </NavLink>
            </p>
          </div>
          <div className="container notification">
            <div className="row">
              <div className="col-sm-9">Notifikasi</div>
              <div className="col-sm-1">
                <div className="counter text-center">3</div>
              </div>
            </div>
            <div className="row notification-list">
              <div className="col-sm-3 py-1 px-auto">ICON</div>
              <div className="col-sm-9 notification-info">
                <div className="notification-info">
                  Panorama Cihanjuang 5 Hari Lagi
                </div>
                <div className="notification-date">Rabu - 26 Februari 2020</div>
              </div>
            </div>
            <div className="row notification-list">
              <div className="col-sm-3 py-1 px-auto">ICON</div>
              <div className="col-sm-9 notification-info">
                <div className="notification-info">
                  Panorama Cihanjuang 5 Hari Lagi
                </div>
                <div className="notification-date">Rabu - 26 Februari 2020</div>
              </div>
            </div>
            <div className="text-right remove-notification">Hapus Semua</div>
          </div>

          <div className="bank-account">
            Rekening Bank
            <div className="bank-list"></div>
          </div>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  update_user: (payload) => dispatch(reducer_user.update_user(payload)),
  logout_user: () => dispatch(reducer_user.logout_user()),
});


export default connect(mapStateToProps,mapDispatchToProps)(RightSideBar);


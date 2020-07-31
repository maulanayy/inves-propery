import React, { Component } from "react";
import { images } from "../config";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { Modal, Input , Button, Alert, Form, Select} from "antd";
import { API } from "../config";
import axios from "axios";
import reducer_user from '../config/api-reducers/user';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class RightSideBar extends Component {
  state = {
    showModalPassword: false,
    showModalBanks: false,
    validation: null,
    password: '',
    password_confirm: '',
    alert_message: null,
    alert_type: null,
    alert_message_bank: null,
    alert_type_bank: null,
    showSuccessPassword: false,
    banks: [],
    user_banks: []
  }

  componentDidMount() {
    this.getBanks()
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if(nextProps.user) {
      this.getUserBanks(nextProps);
    }
  }

  getBanks = async (props) => {
    
    const bankRequest = await API.banks.get(false);
    
    if(bankRequest && bankRequest.result){
      
      this.setState({banks: bankRequest.result.data})
    }else{
      // this.setState({error_message: updateRequest.message, alert_type: 'error'})
    }
  }

  getUserBanks = async (props) => {
    
    const params = {
      token: props.user.token, token_email: props.user.email, 
    }
    
    const bankRequest = await API.account.banks(false, params);
    
    if(bankRequest && bankRequest.result){
      console.log(bankRequest.result)
      
      this.setState({user_banks: bankRequest.result.data})
      
      // setTimeout(() => {
      //   this.setState({
      //     showModalPassword: false,          
      //     showSuccessPassword: true
      //   });
      // }, 2000);
    }else{
      // this.setState({error_message: updateRequest.message, alert_type: 'error'})
    }
  }

  addBank = async (values) => {
    console.log('Success:', values);
    const props = this.props;
    const params = {
      token: props.user.token, token_email: props.user.email, 
      bank_id: values.bank_name, 
      account_name: values.an_rek, 
      account_number: values.no_rek
    }
    
    const bankRequest = await API.account.banksAdd(false, params);
    
    if(bankRequest && bankRequest.result){
      console.log(bankRequest.result)
      
      this.setState({alert_message_bank: 'Bank added successfully. Please wait we are reloading...', alert_type_bank: 'success'})
      
      setTimeout(() => {
        window.location = ""
      }, 3000);
    }else{
      this.setState({error_message: bankRequest.message, alert_type: 'error'})
    }
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

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
      [`showModal${name}`]: true
    });
  };

  hideModal = (name) => {
    this.setState({
      [`showModal${name}`]: false
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

  renderBank(props, state){
    if(state.user_banks && state.user_banks.length > 0){
      
      return <div className="bank-list">         
      </div>
    }else{
      return(
        <div className="empty-bank-card" onClick={() => this.showModal('Banks') }>
          <div class="col-xs-1 center-block text-center">
            :( <br />
            Belum ada <br />
            rekening terdaftar
          </div>     
          <div className="plusIcon text-right" style={{marginTop: '-95px',
    marginRight: '-11px', color: '#3cba92'}}><i className="fa fa-plus-circle fa-2x"></i></div>
    
        </div>
  )
    }
  }

  renderBankForm() {
    const state = this.state;
    
    return (
      <Form
        layout='vertical'
        name="basic"
        onFinish={(e) => this.addBank(e)}
        onFinishFailed={this.onFinishFailed}
      >
        {
              state.alert_message_bank == null ? null : <div className="md-form mb-5">
              <Alert message={state.alert_message_bank} type={state.alert_type_bank} closable></Alert>
            </div>
            }

        <Form.Item
          
          name="bank_name"
          rules={[{ required: true, message: 'Mohon isi nama bank!' }]}
        >
          <Select name="bank_name" placeholder="Nama Bank">
            {
              state.banks && state.banks.map(e => (
              <Select.Option value={e.id} key={e.id}>{e.name}</Select.Option>
              ))
            }            
          </Select>
        </Form.Item>

        <Form.Item
          
          name="no_rek"
          rules={[{ required: true, message: 'Mohon isi nomor rekening!' }]}
        >
          <Input placeholder="Nomor Rekening"/>
        </Form.Item>

        <Form.Item
          
          name="an_rek"
          rules={[{ required: true, message: 'Mohon isi atas nama!' }]}
        >
          <Input placeholder="Atas Nama"/>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="button btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
  
  renderModalBanks(){
    return(<Modal 
      onCancel={() => this.hideModal('Banks')}
      width={'60%'}
      visible={this.state.showModalBanks}
      footer={null}>
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div class="col-xs-1 center-block text-center Rectangle-73">
                <a href="#">
                  <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> 
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </a>
              </div>      
            </div>
            <div className="col-6">
              <div className="Rectangle-74">
              <div class="col-xs-1 center-block text-center Rectangle-74-plus">+</div>
              </div>
            </div>
            <div className="col-3">
              <div class="col-xs-1 center-block text-center Rectangle-73">
                  <a href="#">
                    <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </a>
                </div>
            </div>
          </div>
          <div className="row" style={{margin: '20px 0 20px 0', borderBottom: '1px solid #eeeeee'}}></div>
          <div className="row">
            <div className="col-5">
              { this.renderBankForm() }
            </div>
            
          </div>
        </div>
      </Modal>)
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
          onCancel={() => this.hideModal('Password')}
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
          this.props.update_user({picture: result.picture})                  
      }).catch(errors => {
        if (errors.response.status === 401) this.props.logout_user()        
      });


  }

  render(){
    const state = this.state;
    const props = this.props;
    const user = props.user;

    return (
      <nav className="right-sidebar">
        { this.renderSuccessPassword() }
        { this.renderModalPassword() }
        { this.renderModalBanks() }
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
            {
              this.renderBank(props, state)
            }
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


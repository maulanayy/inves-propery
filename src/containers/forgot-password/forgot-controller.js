import React, { Component } from "react";
import View from "./forgot-view";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
import { Modal } from "antd"

class ForgotPassword extends Component {
  state = {
    validation: null,
    error_message: '',
    isLoading: false
  }

  
  onSubmit = async (values) => {
    console.log(values)
    this.setState({isLoading: true})
    const params = {email: values.email}
    const loginRequest = await API.account.forgot(false, params);
    
    if(loginRequest && loginRequest.status == 20){
      this.setState({isLoading: false, error_message: ''})
      Modal.success({
        content: loginRequest.message ,
        okButtonProps: {
          className: "btn button btn-primary"
        },
        onOk() {
          document.location = '/login'
        },
      });
    }else{
      this.setState({error_message: loginRequest.message, isLoading: false})
    }
  }

  

  render(){
    return(<View 
      validation={this.state.validation}
      error_message={this.state.error_message}
      isLoading={this.state.isLoading}
      onSubmit={this.onSubmit}
    />)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


const mapDispatchToProps = (dispatch) => ({
  login_user: (payload) => dispatch(reducer_user.login_user(payload)),
});


export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword);
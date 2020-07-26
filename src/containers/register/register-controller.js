import React, {Component} from "react";
import View from "./register-view";
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
import { connect } from 'react-redux';

class Register extends Component {
  state = {
    validation: null,
    email: '',
    password: '',
    phone_number: '',
    name: '',
    error_message: ''
  }

  textChanged = (field, value) => {
    let validation = this.state.validation || {}
    let reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    let rePhone = /^[0-9\b]+$/;
    this.setState({[field]: value})
    switch(field){
      case 'email': 
        
        validation[field] = reEmail.test(value)
        this.setState({validation: validation})        
        break;
      case 'password': 
        validation[field] = value.length >= 8
        this.setState({validation: validation})        
        break;
      case 'name': 
        validation[field] = value.length >= 3
        this.setState({validation: validation})        
        break;  
      case 'phone_number':
        
        validation[field] = rePhone.test(value)
        this.setState({validation: validation})                
        break;
    }    
  }

  onSubmit = async () => {
    
    const state = this.state
    const params = {email: state.email, password: state.password, name: state.name, phone_number: state.phone_number}
    const registerRequest = await API.account.register(false, params);
    
    const token = registerRequest.result && registerRequest.result.token 
    if(token){
      this.props.logout_user(registerRequest.result);
      document.location = '/'
    }else{
      this.setState({error_message: registerRequest.message})
    }
  }

  

  render(){
    return(<View 
      validation={this.state.validation}
      error_message={this.state.error_message}
      isLoading={false}
      textChanged={this.textChanged}
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


export default connect(mapStateToProps,mapDispatchToProps)(Register);
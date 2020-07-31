import React, {Component} from "react";
import View from "./login-view";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Login extends Component {
  state = {
    validation: null,
    email: '',
    password: '',
    error_message: '',
    isLoading: false
  }

  textChanged = (field, value) => {
    let validation = this.state.validation || {}
    
    this.setState({[field]: value})
    switch(field){
      case 'email': 
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        validation[field] = re.test(value)
        this.setState({validation: validation})        
        break;
      case 'password': 
        validation[field] = value.length >= 8
        this.setState({validation: validation})        
        break;
    }    
  }

  onSubmit = async () => {
    this.setState({isLoading: true})
    const state = this.state
    const params = {email: state.email, password: state.password}
    const loginRequest = await API.account.login(false, params);
    const token = loginRequest.result && loginRequest.result.token 
    if(token){
      this.setState({isLoading: false})
      this.props.login_user(loginRequest.result)
      document.location = '/'
    }else{
      this.setState({error_message: loginRequest.message, isLoading: false})
    }
  }

  

  render(){
    return(<View 
      validation={this.state.validation}
      error_message={this.state.error_message}
      isLoading={this.state.isLoading}
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


export default connect(mapStateToProps,mapDispatchToProps)(Login);
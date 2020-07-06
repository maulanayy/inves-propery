import React, {Component} from "react";
import View from "./login-view";
import { API } from "../../config";
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Login extends Component {
  state = {
    validation: null,
    email: '',
    password: ''
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
    
    const state = this.state
    const params = {email: state.email, password: state.password}
    const loginRequest = await API.account.login(false, params);
    
    console.log('loginRequest', loginRequest)
  }

  

  render(){
    return(<View 
      validation={this.state.validation}
      isLoading={false}
      textChanged={this.textChanged}
      onSubmit={this.onSubmit}
    />)
  }
}

export default Login;
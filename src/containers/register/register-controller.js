import React, {Component} from "react";
import View from "./register-view";
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
import { connect } from 'react-redux';

class Register extends Component {
  state = {
    error_message: '',
    isLoading: false
  }

  
  onSubmit = async (values) => {
    
    const params = {email: values.email, password: values.password, name: values.name, phone_number: values.phone_number}
    const registerRequest = await API.account.register(false, params);
    
    const token = registerRequest.result && registerRequest.result.token 
    this.setState({isLoading: true})

    if(token){
      this.setState({error_message: '', isLoading: false})
      this.props.logout_user(registerRequest.result);
      document.location = '/'
    }else{
      this.setState({error_message: registerRequest.message, isLoading: false})
    }
  }

  

  render(){
    return(<View 
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


export default connect(mapStateToProps,mapDispatchToProps)(Register);
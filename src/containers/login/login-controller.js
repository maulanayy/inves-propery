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
    error_message: '',
    isLoading: false
  }

  
  onSubmit = async (values) => {
    console.log(values)
    this.setState({isLoading: true})
    const params = {email: values.email, password: values.password}
    const loginRequest = await API.account.login(false, params);
    const token = loginRequest.result && loginRequest.result.token 
    if(token){
      this.setState({isLoading: false, error_message: ''})
      this.props.login_user(loginRequest.result)
      document.location = '/dashboard'
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


export default connect(mapStateToProps,mapDispatchToProps)(Login);
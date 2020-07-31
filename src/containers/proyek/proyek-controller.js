import React, {Component} from "react";
import View from "./proyek-view";
import { Modal } from "antd"
import { API } from "../../config";
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Controller extends Component {
  state = {
    isLoading: false,
    error_message: ''
  }

  onSubmitFailed = (values) => {
    console.log('values', values)
  }

  onSubmit = async (values) => {
    this.setState({isLoading: true})
    const params = {email: values.email, password: values.password}
    const loginRequest = await API.account.login(false, params);
    const token = loginRequest.result && loginRequest.result.token 
    if(token){
      this.setState({isLoading: false})
      Modal.success({
        content: 'Project successfully created',
        okButtonProps: {
          className: "btn button btn-primary"
        },
        onOk() {
          document.location = '/'
        },
      });
    }else{
      this.setState({error_message: loginRequest.message, isLoading: false})
    }
  }
  
  render() {
    return(<View
      state={this.state}
      error_message={this.state.error_message}
      isLoading={this.state.isLoading}
      onSubmitFailed={this.onSubmitFailed}
      onSubmit={this.onSubmit}
    ></View>)
  }
}

export default Controller;
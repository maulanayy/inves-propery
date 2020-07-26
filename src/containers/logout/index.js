import { Component } from "react";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';

class Logout extends Component {
  
  componentDidMount(){    
    this.requestAPI();      
  }

  requestAPI = async () => {
    const props = this.props;
    const user = props.user;
    const params = {token: user.token, token_email: user.email}
    const logoutRequest = await API.account.logout(false, params);
    
    if(logoutRequest){
      this.props.logout_user();
      document.location.href = '/'
    }
  }

  render(){
    return null
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});


const mapDispatchToProps = (dispatch) => ({
    logout_user: () => dispatch(reducer_user.logout_user()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Logout);
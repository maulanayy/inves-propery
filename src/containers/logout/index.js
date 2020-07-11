import React, {Component} from "react";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Logout extends Component {
  
  componentDidMount(){
      this.props.logout_user()
      document.location.href = '/'
  }

  render(){
    return null
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});


const mapDispatchToProps = (dispatch) => ({
    logout_user: (payload) => dispatch(reducer_user.logout_user()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Logout);
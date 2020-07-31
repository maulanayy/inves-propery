import React, {Component} from "react";
import View from "./checkout-view";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
import axios from "axios";
import qs from 'qs'

import { useParams } from "react-router-dom";
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Checkout extends Component {
  state = {
    isLoading: false,
    project: {},
    slot: 0
  }

  componentDidMount() {
    let params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    this.setState({slot: params.slot || 0})
    this.getData()
      
  }

  getData = async () => {
    let current = axios.CancelToken.source();
    let slug = this.props.match.params.slug

    try {
      let dataProject = await API.project.getbyID(
        current.token,
        slug
      );

      dataProject.result.target /= 1000000;
      dataProject.result.collected /= 1000000;
      dataProject.result.persentage = (dataProject.result.collected / dataProject.result.target) * 100
      
      this.setState({project: dataProject.result})      
    } catch (error) {
      console.error("error : ", error);
    }
  }

  onSubmit = async () => {
    
  }

  

  render(){
    return(<View 
      isLoading={this.state.isLoading}      
      onSubmit={this.onSubmit}
      project={this.state.project}
      slot={this.state.slot}
    />)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps,null)(Checkout);
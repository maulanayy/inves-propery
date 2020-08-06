import React, {Component} from "react";
import View from "./checkout-view";
import { connect } from 'react-redux';
import { API } from "../../config";
import reducer_user from '../../config/api-reducers/user';
import axios from "axios";
import qs from 'qs'

import { useParams, Redirect } from "react-router-dom";
// const Controller = () => {
//   return <View />;
// };

// export default Controller;


class Checkout extends Component {
  state = {
    isLoading: false,
    project: {},
    slot: 0,
    paymentMethods: {},
    showModalPaymentMedhod: false,
    showModalPreviewCheckout: false,
    selectedPaymentMethod: {}
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

      let dataPayments = await API.paymentMethods.get(false);

      dataProject.result.target /= 1000000;
      dataProject.result.collected /= 1000000;
      dataProject.result.persentage = (dataProject.result.collected / dataProject.result.target) * 100
      
      this.setState({project: dataProject.result, paymentMethods: dataPayments.result})      
    } catch (error) {
      console.error("error : ", error);
    }
  }

  onSubmitVoucher = async (values) => {
    
  }

  onCheckout = () => {
    this.setState({showModalPaymentMedhod: true})
  }

  onCloseModalPaymentMethod = () => {
    this.setState({showModalPaymentMedhod: false})
  }

  onSelectModalPaymentMethod = (e) => {
    this.setState({showModalPaymentMedhod: false, showModalPreviewCheckout: true, selectedPaymentMethod: e})
  }

  onCloseModalPreviewCheckout = () => {
    this.setState({showModalPreviewCheckout: false})
  }

  submitPayment = async () => {
    const props = this.props
    const state = this.state
    const selectedPaymentMethod = state.selectedPaymentMethod
    this.setState({showModalPreviewCheckout: false, isLoading: true})
    
    let current = axios.CancelToken.source();
    let slug = this.props.match.params.slug

    try {
      
      var fd = new FormData();
      fd.set('token', props.user.token);
      fd.set('token_email', props.user.email);
      fd.set('project_id', selectedPaymentMethod.id);
      fd.set('payment_method_id', state.project.id);
      fd.set('quantity', state.slot);
      fd.set('base_amount', parseInt(state.project.per_share_value));
      fd.set('amount', parseInt(state.project.per_share_value) * parseInt(state.slot));

      // if(file){
      //   fd.set('picture', file);
      // }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };

      axios.post(`${API.ROOT_URL}/project/${slug}/invest`, fd, config)
        .then(response => {
          this.setState({isLoading: false}, () => {
            document.location = '/checkout-success'
          })
        }).catch(errors => {
          console.log('logger errors', errors)
          // if (errors.response.status === 401) this.props.logout_user()        
        });

      // let dataPayments = await API.project.invest(current.token, slug, params);
      // console.log('results dataPayments', dataPayments)
      this.setState({isLoading: false}, () => {
        // document.location = '/checkout-success'
      })

    } catch (error) {
      console.error("error : ", error);
      this.setState({isLoading: false})
    }
  }

  

  render(){
    const state = this.state
    return(<View 
      isLoading={state.isLoading}      
      onSubmit={this.onSubmitVoucher}
      project={state.project}
      slot={state.slot}
      onCheckout={this.onCheckout}
      paymentMethods={state.paymentMethods}
      showModalPaymentMedhod={state.showModalPaymentMedhod}
      onCloseModalPaymentMethod={this.onCloseModalPaymentMethod}
      showModalPreviewCheckout={state.showModalPreviewCheckout}
      onCloseModalPreviewCheckout={this.onCloseModalPreviewCheckout}
      selectedPaymentMethod={state.selectedPaymentMethod}
      onSelectModalPaymentMethod={this.onSelectModalPaymentMethod}
      submitPayment={this.submitPayment}
    />)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps,null)(Checkout);
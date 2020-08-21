import React, { Component } from "react";
import View from "./profile-view";
import { connect } from 'react-redux';
import { API } from "../../config";
import axios from "axios";
import reducer_user from '../../config/api-reducers/user';

class Profile extends Component {
  
    state = {
      profile: {
        province_id: '',
        city_id: '',
        name: null, 
        phone_number: null, 
        birthdate: null, 
        address: null,
        isLoading: false
      },
      provinces: [],
      cities: [],
      npwpUploader: null,
      ktpUploader: null,
      alert_message: null,
      alert_type: null
    
  }

  componentDidMount(){
    if(this.props.user !== this.state.profile){
      this.setState({profile: this.props.user})
    }

    this._loadData()
  }

  uploadFiles = () => {
    const user = this.props.user;
    const state = this.state;
    let profile = state.profile;

    var fd = new FormData();
    fd.set('token', user.token);
    fd.set('token_email', user.email);

    if(profile.personal_id_number){
      fd.set('personal_id_number', profile.personal_id_number);
    }
    if(state['ktpUploader']){
      fd.append('personal_id_image', state['ktpUploader']); 
    }        
    if(profile.tax_id_number){
      fd.set('tax_id_number', profile.tax_id_number);
    }
    if(state['npwpUploader']){
      fd.append('tax_id_image', state['npwpUploader']); 
    }
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    axios.post(`${API.ROOT_URL}/user/verification/add`, fd, config)
      .then(response => {
          let result = response.data.result
          let prof_res = result.profile

          let params = {
            personal_id_number: prof_res.personal_id_number,
            personal_id_image: prof_res.personal_id_image,
            tax_id_number: prof_res.tax_id_number,
            tax_id_image: prof_res.tax_id_image
          }
          this.props.update_user(params)
          this.setState({profile: {...profile, ...params}})

        this.setState({alert_message: response.data.message, alert_type: 'success', isLoading: false})
      }).catch(errors => {
        if (errors.response.status === 401) this.props.logout_user()
        
        this.setState({alert_message: 'Upload verifikasi gagal', alert_type: 'error', isLoading: false})
      });


  }

  _loadData = async () => {
      let current = axios.CancelToken.source();
      let provinceRequest = await API.masterdata.provincesAll(current.token);
      let data = provinceRequest.result || [];
      
      if(provinceRequest){
        this.setState({provinces: data})
        let province_id = this.state.profile.province_id || (data[0] && data[0].id)
        this._loadCities(province_id)
      }
  }

  _loadCities = async (provinceId) => {
      let current = axios.CancelToken.source();
      let cityRequest = await API.masterdata.citiesAll(current.token, provinceId);
      let data = cityRequest.result || [];
      
      if(cityRequest){
        let profile = this.state.profile
        profile.province_id = provinceId
        this.setState({cities: data, profile: profile})
        // this._setCity(data[0] && data[0].id)
      }
  }

  onSubmit = async () => {
    this.setState({isLoading: true})

    const state = this.state
    const props = this.props
    let profile = state.profile

    const params = { 
      token: props.user.token, token_email: props.user.email, 
      name: profile.name, phone_number: profile.phone_number, 
      birthdate: profile.birthdate, 
      address: profile.address, city_id: profile.city_id, province_id: profile.province_id
    }
    const updateRequest = await API.account.update(false, params);

    if(updateRequest && updateRequest.result){
      this.props.update_user(updateRequest.result)
      this.uploadFiles()
    }else{
      this.setState({alert_message: updateRequest.message, alert_type: 'error', isLoading: false})
    }
  }

  _setCity = (cityId) => {
    let profile = this.state.profile
    profile.city_id = cityId
    this.setState({profile: profile})
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.user !== this.state.profile){
      this.setState({profile: nextProps.user})
    }
  }


  openInputUploader = (name) => {
    document.getElementById(name).click()
  }

  onUploaded = (e, name) => {
    let file = e.target.files[0]
    if(file) {
      if(name === 'ktp'){
        this.setState({profile: {...this.state.profile, personal_id_image: file.name}})
      }else if(name === 'npwp'){
        this.setState({profile: {...this.state.profile, tax_id_image: file.name}})
      }
      this.setState({[`${name}Uploader`]: file})
    }
    
  }

  onChangeDate = (date, dateString) => {
    let profile = this.state.profile
    profile.birthdate = dateString
    this.setState({profile: profile})
  }

  onChangeText = (e, field) => {
    let profile = this.state.profile
    profile[field] = e.target.value
    this.setState({profile: profile})
  }

  render(){
    const state = this.state;
    return(
      <View 
      profile={state.profile} 
      provinces={state.provinces}
      cities={state.cities}
      loadCities={this._loadCities}
      _setCity={this._setCity}
      openInputUploader={this.openInputUploader}
      onUploaded={this.onUploaded}
      npwpUploader={state.npwpUploader}
      ktpUploader={state.ktpUploader}
      onChangeDate={this.onChangeDate}
      onChangeText={this.onChangeText}
      onSubmit={this.onSubmit}
      alert_message={state.alert_message}
      alert_type={state.alert_type}
      uploadFiles={this.uploadFiles}
      isLoading={state.isLoading}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  update_user: (payload) => dispatch(reducer_user.update_user(payload)),
  logout_user: () => dispatch(reducer_user.logout_user()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
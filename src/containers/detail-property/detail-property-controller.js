import React, { useEffect, useState, useRef, Component } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import View from "./detail-property-view";
import { API } from "../../config";
import { data } from "jquery";

class Controller extends Component {
  state = {
    project: {},
    imgActive: {},
    slot: null
  }

  componentDidMount(){
    this._loadData()
  }

  _loadData = async () => {
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
      var txt = document.createElement("textarea");
      txt.innerHTML = dataProject.result.overview;
      dataProject.result.overview = txt.value
      
      txt.innerHTML = dataProject.result.specification;
      dataProject.result.specification = txt.value
      dataProject.result.slug = slug
      let _url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA5jZMMNij0XxUvkkXzOl4F7gIJTJenh4k&q=${dataProject.result.latitude},${dataProject.result.longitude}`
      dataProject.result['mapUrl'] = _url
      let imgActive = dataProject.result.galleries && dataProject.result.galleries[0] || {}

      this.setState({project: dataProject.result, imgActive: imgActive, slot: dataProject.share_count})      
    } catch (error) {
      console.error("error : ", error);
    }
  };

  setActiveImage = (e) => {
    this.setState({imgActive: e})
  }

  setSlotCount = (e) => {
    this.setState({slot: e.target.value})
  }

  render(){
    return(
      <View 
        project={this.state.project}
        imgActive={this.state.imgActive}
        setActiveImage={this.setActiveImage}
        setSlotCount={this.setSlotCount}
      />
    )
  }
}

export default Controller;

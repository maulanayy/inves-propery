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
    slot: null,
    imbal: 0,
    total_roi_max: 0,
    total_roi: 0
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

      
      this.setState({project: dataProject.result, imgActive: imgActive, slot: 1}, () => {
        this.calCulateReturn(1)
      })      
    } catch (error) {
      console.error("error : ", error);
    }
  };

  calCulateReturn = (value) => {
    let project = this.state.project
    let imbal = (parseFloat(project.roi) / 100) * parseFloat(project.per_share_value) * parseInt(value)
    let total_roi = ((parseFloat(project.roi) / 100) * parseFloat(project.per_share_value) * value) + (parseInt(value) * parseFloat(project.per_share_value))
    let total_roi_max = ((parseFloat(project.roi_max) / 100) * parseFloat(project.per_share_value) * value) + (parseInt(value) * parseFloat(project.per_share_value))
    this.setState({imbal: imbal, total_roi: total_roi, total_roi_max: total_roi_max})
  }

  setActiveImage = (e) => {
    this.setState({imgActive: e})
  }

  setSlotCount = (e) => {
    this.setState({slot: e}, () => {
      this.calCulateReturn(e)
    })
  }

  render(){
    return(
      <View 
        project={this.state.project}
        imgActive={this.state.imgActive}
        setActiveImage={this.setActiveImage}
        setSlotCount={this.setSlotCount}
        slot={this.state.slot}
        imbal={this.state.imbal}
        total_roi_max={this.state.total_roi_max}
        total_roi={this.state.total_roi}
      />
    )
  }
}

export default Controller;

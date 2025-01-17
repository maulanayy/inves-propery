import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import View from "./property-view";
import { API } from "../../config";

const Controller = () => {
  const source = useRef(null);
  const [projects, setProjects] = useState([]);
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [harga, setHarga] = useState('');
  const [periode, setPeriode] = useState('');
  const [keyword, setKeyword] = useState('');

  const onSubmit = async () => {
    console.log('onSubmit pressed')
    source.current = axios.CancelToken.source();
    const params = {
      'status': status, 'per_share_value': harga, 'duration': periode,
      'city_id': lokasi
    }

    try {
      const dataProject = await API.project.get(source.current.token, params);
      
      dataProject.result.map(value => {
        
        value.target /= 1000000;
        value.collected /= 1000000;
        value.persentage = (value.collected / value.target) * 100

        return value  
      })
      setProjects(dataProject.result);
      
    } catch (error) {
      console.error("error : ", error);
    }
  }
  
  const _loadData = async () => {
    source.current = axios.CancelToken.source();
    
    try {
      const dataProject = await API.project.get(source.current.token, null);
      const dataCities = await API.masterdata.cityProjects(source.current.token, 1);
      
      dataProject.result.map(value => {
        
        value.target /= 1000000;
        value.collected /= 1000000;
        value.persentage = (value.collected / value.target) * 100

        return value  
      })
      setProjects(dataProject.result);
      setCities(dataCities.result)
    } catch (error) {
      console.error("error : ", error);
    }
  };

  useEffect(() => {
    _loadData();

    return () => {
      if (source.current) {
        source.current.cancel("request canceled");
      }
    };
  }, []);
  return <View 
  projects={projects} setStatus={setStatus} status={status} 
  setLokasi={setLokasi} lokasi={lokasi} 
  setHarga={setHarga} harga={harga} 
  setPeriode={setPeriode} periode={periode} 
  setKeyword={setKeyword}
  onSubmit={onSubmit}
  cities={cities}
  />;
};

export default Controller;

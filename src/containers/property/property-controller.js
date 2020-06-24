import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import View from "./property-view";
import { API } from "../../config";

const Controller = () => {
  const source = useRef(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const _loadData = async () => {
      source.current = axios.CancelToken.source();
      try {
        const dataProject = await API.project.get(source.current.token);
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
    };
    _loadData();

    return () => {
      if (source.current) {
        source.current.cancel("request canceled");
      }
    };
  }, []);
  return <View projects={projects} />;
};

export default Controller;

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import View from "./detail-property-view";
import { API } from "../../config";

const Controller = () => {
  const source = useRef(null);
  const [project, setProject] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const _loadData = async () => {
      source.current = axios.CancelToken.source();
      try {
        let dataProject = await API.project.getbyID(
          source.current.token,
          slug
        );

        dataProject.result.target /= 1000000;
        dataProject.result.collected /= 1000000;
        dataProject.result.persentage = (dataProject.result.collected / dataProject.result.target) * 100


        setProject(dataProject.result);
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

  return <View project={project}/>;
};

export default Controller;

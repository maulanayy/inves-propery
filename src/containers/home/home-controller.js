import React, { useEffect, useState, useRef } from "react";
import View from "./home-view";
import axios from "axios";

import { API } from "../../config";
const Controller = () => {
  const source = useRef(null);
  const [statistics, setStatistics] = useState({});
  const [supports, setSupports] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const _loadData = async () => {
      source.current = axios.CancelToken.source();
      try {
        const dataStatistic = await API.home.statistic(source.current.token);
        const dataSupport = await API.home.support(source.current.token);
        const dataTestimonials = await API.home.testimonial(
          source.current.token
        );
        const dataOpinion = await API.home.opinion(source.current.token);
        const dataProject = await API.project.get(source.current.token);

        dataStatistic.result.investSum /= 1000000000;


        dataProject.result.map(value => {
          
          value.target /= 1000000;
          value.collected /= 1000000;
          value.persentage = (value.collected / value.target) * 100

          return value  
        })

        setTestimonials(dataTestimonials.result);
        setOpinions(dataOpinion.result.data);
        setStatistics(dataStatistic.result);
        setSupports(dataSupport.result.data);
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

  return (
    <View
      statistics={statistics}
      supports={supports}
      testimonials={testimonials}
      opinions={opinions}
      projects={projects}
    />
  );
};

export default Controller;

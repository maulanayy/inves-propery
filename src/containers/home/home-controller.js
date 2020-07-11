import React, { useEffect, useState, useRef } from "react";
import View from "./home-view";
import axios from "axios";
import reducer_user from '../../config/api-reducers/user';
import { API } from "../../config";
const Controller = () => {
  const source = useRef(null);
  const [statistics, setStatistics] = useState({});
  const [supports, setSupports] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [projects, setProjects] = useState([]);
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const _loadData = async () => {
      source.current = axios.CancelToken.source();
      
      
      setIsLoading(true)
      try {
        const dataStatistic = await API.home.statistic(source.current.token);
        const dataSupport = await API.home.support(source.current.token);
        const dataTestimonials = await API.home.testimonial(
          source.current.token
        );
        const dataOpinion = await API.home.opinion(source.current.token);
        const dataProject = await API.project.get(source.current.token);
        const dataFeatures = await API.home.featured(source.current.token);

        dataStatistic.result.investSum /= 1000000000;


        let value = dataProject.result;
          
        value.target /= 1000000;
        value.collected /= 1000000;
        value.persentage = (value.collected / value.target) * 100;

        

        setFeatures(dataFeatures.result.data);
        setTestimonials(dataTestimonials.result.data);
        setOpinions(dataOpinion.result.data);
        setStatistics(dataStatistic.result);
        setSupports(dataSupport.result.data);
        setProjects(dataProject.result);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
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
      features={features}
      isLoading={isLoading}
    />
  );
};

export default Controller;

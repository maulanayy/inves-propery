import React, { useEffect, useState, useRef } from "react";
import View from "./faq-view";
import axios from "axios";
import { API } from "../../config";

const Controller = () => {
  const source = useRef(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const _loadData = async () => {
      source.current = axios.CancelToken.source();
      try {
        const dataFaq = await API.faqs.get(source.current.token);
        setFaqs(dataFaq.result.data);
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

  return <View faqs={faqs} />;
};

export default Controller;

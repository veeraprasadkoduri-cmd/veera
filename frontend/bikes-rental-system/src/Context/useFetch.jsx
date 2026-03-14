/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", propData = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  async function getData() {
    let response;
    try {
      if (method === "GET") {
        response = await axios.get(url);
      } else if (method === "POST") {
        response = await axios.post(url, propData);
      } else if (method === "PUT") {
        response = await axios.put(url, propData);
      }
      setData(response.data);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, errors };
};

export default useFetch;

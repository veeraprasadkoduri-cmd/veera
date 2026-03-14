import axios from "axios";

export const fetchData = async (url, method = "GET", data = {}) => {
  try {
    const response = await axios({
      url,
      method,
      data
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error(`Data requested cannot be fetched ${error}`);
    return error;
  }
};

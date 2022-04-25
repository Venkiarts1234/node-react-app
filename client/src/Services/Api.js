import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

API.interceptors.response.use(
  (next) => {
    return Promise.resolve(next);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getDashboardMetrics() {
  const response = await API.get("/metrics")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
  return response;
}

export default API;

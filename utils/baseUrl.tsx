import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    // You can add headers or modify the request here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    // You can handle and transform the response here if needed
    return response;
  },
  (error) => {
    // You can handle errors here, log them, or show error messages to the user
    return Promise.reject(error);
  }
);

export default instance;

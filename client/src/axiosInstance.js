import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://django-1-oiac.onrender.com', // Replace with your API base URL
  timeout : 10000,
  headers : {
    "Content-Type" : "application/json",
  }
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); 

//     if (token) {
//       config.headers.authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;




import axios from "axios";

//get token from local
let token = localStorage.getItem("token");

// Set baseURL
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

// Set default headers
axios.defaults.headers.common = {
  Authorization: "Bearer " + token,
  Accept: "application/json, application/octet-stream",
};

//intercept the request
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Perform operation according error code. for example, toast notification, logout, etc.
    if (typeof error.response != 'undefined' && error.response.status === 401) {
        localStorage.clear()
        //** if you need to logout when status is 401 then redirect to login **//
        //window.location.href = '/login'
    }
    return Promise.reject(error);
  }
);

export default axios
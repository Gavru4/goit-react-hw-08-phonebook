import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const currentUserApi = (token) => {
  console.log(token);
  return axios
    .get("users/current", token)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
export const newUserApi = (form) => {
  return axios
    .post("users/signup", form)
    .then((res) => res.data.token)
    .catch((error) => {
      throw error;
    });
};

export const getUserLogin = (form) => {
  return axios
    .post("users/login", form)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const userLogoutApi = () => {
  return axios
    .post("users/logout")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

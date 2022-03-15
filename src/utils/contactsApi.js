import axios from "axios";

// const baseUrl = "https://6213fd6889fad53b1f07c522.mockapi.io/api/v1/";

// axios.defaults.baseURL = baseUrl;

// export const getContactsApi = () => {
//   return axios
//     .get("contacts")
//     .then((res) => res.data)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const putContactApi = (form) => {
//   return axios
//     .post("contacts", form)
//     .then((res) => res.data)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const deleteContactApi = (id) => {
//   return axios
//     .delete(`contacts/${id}`)
//     .then((res) => res.data)
//     .catch((error) => {
//       throw error;
//     });
// };
const baseUrl = "https://connections-api.herokuapp.com";

axios.defaults.baseURL = baseUrl;

export const getContactsApi = () => {
  return axios
    .get("contacts")
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
export const deleteContactApi = (id) => {
  return axios
    .delete(`contacts/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

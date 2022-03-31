import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const updateContactsApi = ({ id, token }) => {
  return axios
    .patch(`/contacts/${id}`, token)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
export const getUsersContactsApi = () => {
  return axios
    .get("/contacts")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const postNewContactsApi = (form) => {
  return axios
    .post("/contacts", form)
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

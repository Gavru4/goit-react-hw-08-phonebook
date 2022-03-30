import { createAsyncThunk } from "@reduxjs/toolkit";
import { logDOM } from "@testing-library/react";
import {
  deleteContactApi,
  getUsersContactsApi,
  postNewContactsApi,
} from "../../utils/contactsApi";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export const getUserContacts = createAsyncThunk(
  "/contacts",
  async (_, thunkApi) => {
    try {
      const contacts = await getUsersContactsApi();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUserContacts = createAsyncThunk(
  "/contacts",
  async (form, thunkApi) => {
    try {
      const contact = await postNewContactsApi(form);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

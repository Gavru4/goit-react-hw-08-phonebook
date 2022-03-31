import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContactApi,
  getUsersContactsApi,
  postNewContactsApi,
  updateContactsApi,
} from "../../utils/contactsApi";

export const updateUserContacts = createAsyncThunk(
  "contacts/update",
  async (data, thunkApi) => {
    console.log(data);
    // console.log(token);
    //data{id,token}
    try {
      const contacts = await updateContactsApi(data);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getUserContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkApi) => {
    try {
      const contacts = await getUsersContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUserContacts = createAsyncThunk(
  "contacts/add",
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

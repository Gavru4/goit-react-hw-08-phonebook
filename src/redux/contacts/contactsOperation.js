import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContactApi,
  getContactsApi,
  putContactApi,
} from "../../utils/contactsApi";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const putContact = createAsyncThunk(
  "users/signup",
  async (form, thunkApi) => {
    try {
      const newContact = await putContactApi(form);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const contact = await deleteContactApi(id);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

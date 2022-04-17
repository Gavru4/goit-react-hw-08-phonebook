import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  currentUserApi,
  getUserLogin,
  newUserApi,
  userLogoutApi,
} from "../../utils/userApi";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const currentUser = createAsyncThunk(
  "/user/current",
  async (dataToken, thunkApi) => {
    try {
      token.set(dataToken);
      const result = await currentUserApi(dataToken);
      return { dataToken, result };
    } catch (error) {
      return thunkApi.rejectWithValue(error.messsege);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async (form, thunkApi) => {
    try {
      const login = await getUserLogin(form);
      token.set(login.token);
      return login;
    } catch (error) {
      return thunkApi.rejectWithValue(error.messsege);
    }
  }
);
export const newUser = createAsyncThunk(
  "users/signup",
  async (form, thunkApi) => {
    try {
      const newUser = await newUserApi(form);
      token.set(newUser);
      return form;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "users/logout",
  async (_, thunkApi) => {
    try {
      const userLogout = await userLogoutApi();
      token.unset();
      return userLogout;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createReducer } from "@reduxjs/toolkit";
import { currentUser, loginUser, newUser, userLogout } from "./userOperation";

const initialState = {
  user: { name: null, email: null, number: null },
  token: null,
  isLogedIn: false,
};
export const userRudeser = createReducer(initialState, {
  [currentUser.fulfilled]: (state, { payload }) => {
    state.user = payload.result;
    state.token = payload.dataToken;
    state.isLogedIn = true;
  },
  [newUser.fulfilled]: (state, { payload }) => {
    state.user.name = payload.name;
    state.user.email = payload.email;
    state.isLogedIn = true;
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLogedIn = true;
  },
  [userLogout.fulfilled]: (state) => {
    state.user = initialState.user.name;
    state.email = initialState.user.email;
    state.token = null;
    state.isLogedIn = false;
  },
});

export const isLoadingReduser = createReducer(false, {
  [newUser.pending]: () => true,
  [newUser.fulfilled]: () => false,
  [newUser.rejected]: () => false,
  [currentUser.pending]: () => true,
  [currentUser.fulfilled]: () => false,
  [currentUser.rejected]: () => false,
  [loginUser.pending]: () => true,
  [loginUser.fulfilled]: () => false,
  [loginUser.rejected]: () => false,
  [userLogout.pending]: () => true,
  [userLogout.fulfilled]: () => false,
  [userLogout.rejected]: () => false,
});

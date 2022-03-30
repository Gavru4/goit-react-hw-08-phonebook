import { createReducer } from "@reduxjs/toolkit";
import { loginUser, newUser, userLogout } from "./userOperation";

const initialState = {
  user: { name: null, email: null, number: null },
  token: null,
  isLogedIn: false,
};
export const userRudeser = createReducer(initialState, {
  [newUser.fulfilled]: (state, { payload }) => {
    state.user.name = payload.name;
    state.user.email = payload.email;
    // state.token = payload.token;
    state.isLogedIn = true;
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.email = payload.email;
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
});

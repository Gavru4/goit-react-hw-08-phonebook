import { createReducer } from "@reduxjs/toolkit";
import {
  addUserContacts,
  deleteContact,
  getUserContacts,
  loginUser,
  newUser,
  userLogout,
} from "./contactsOperation";

const initialState = {
  user: { name: null, email: null, number: null },
  token: null,
  isLogedIn: false,
};
export const contactsRudeser = createReducer(initialState, {
  [addUserContacts.fulfilled]: (state, { payload }) => {
    // state.user = payload.name;
    state.number = payload.number;
    state.token = payload.token;
    state.isLogedIn = true;
  },

  [newUser.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
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
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload.id);
  },
});

export const isLoadingReduser = createReducer(false, {
  [getUserContacts.pending]: () => true,
  [getUserContacts.fulfilled]: () => false,
  [getUserContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [newUser.pending]: () => true,
  [newUser.fulfilled]: () => false,
  [newUser.rejected]: () => false,
});

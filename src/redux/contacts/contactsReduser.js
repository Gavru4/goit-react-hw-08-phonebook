import { createReducer } from "@reduxjs/toolkit";
import { deleteContact, getContacts, newUser } from "./contactsOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
};

export const contactsRudeser = createReducer(initialState, {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload.id);
  },
  [newUser.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLogedIn = true;
  },
});

export const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [newUser.pending]: () => true,
  [newUser.fulfilled]: () => false,
  [newUser.rejected]: () => false,
});

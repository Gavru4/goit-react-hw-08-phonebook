import { createReducer } from "@reduxjs/toolkit";
import {
  addUserContacts,
  deleteContact,
  getUserContacts,
  updateUserContacts,
} from "./contactsOperation";

export const contactsRudeser = createReducer([], {
  [addUserContacts.fulfilled]: (state, { payload }) => {
    const contactsList = [...state, payload];
    return contactsList;
  },
  [getUserContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
  [updateUserContacts.fulfilled]: (state, { payload }) => {
    const contacts = state.map((el) => {
      if (el.id === payload.id) return payload;
      return el;
    });
    return contacts;
  },
});

export const isLoadingReduser = createReducer(false, {
  [getUserContacts.pending]: () => true,
  [getUserContacts.fulfilled]: () => false,
  [getUserContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [addUserContacts.pending]: () => true,
  [addUserContacts.fulfilled]: () => false,
  [addUserContacts.rejected]: () => false,
  [updateUserContacts.pending]: () => true,
  [updateUserContacts.fulfilled]: () => false,
  [updateUserContacts.rejected]: () => false,
});

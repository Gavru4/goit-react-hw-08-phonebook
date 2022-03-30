import { createReducer } from "@reduxjs/toolkit";
import {
  addUserContacts,
  deleteContact,
  getUserContacts,
} from "./contactsOperation";

export const contactsRudeser = createReducer([], {
  [addUserContacts.fulfilled]: (state, { payload }) => {
    const contact = [...state, payload];
    return contact;
  },

  [getUserContacts.fulfilled]: (state, { payload }) => {
    return payload;
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

export const isLoadingReduser = createReducer(false, {
  [getUserContacts.pending]: () => true,
  [getUserContacts.fulfilled]: () => false,
  [getUserContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

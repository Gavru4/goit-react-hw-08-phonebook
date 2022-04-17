import { createReducer } from "@reduxjs/toolkit";
import {
  addUserContacts,
  deleteContact,
  getUserContacts,
  updateUserContacts,
} from "./contactsOperation";

const initialState = {
  userContacts: [],
  contactIsDeleted: false,
  contactIsUpdated: false,
  contactIsAdded: false,
};

export const contactsRudeser = createReducer(initialState, {
  [addUserContacts.fulfilled]: (state, { payload }) => {
    state.userContacts = [...state.userContacts, payload];
    state.contactIsAdded = true;
  },
  [getUserContacts.fulfilled]: (state, { payload }) => {
    state.userContacts = [...payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    state.userContacts = state.userContacts.filter((el) => el.id !== payload);
    state.contactIsDeleted = true;
  },
  [updateUserContacts.fulfilled]: (state, { payload }) => {
    state.contactIsUpdated = true;
    const contacts = state.userContacts.map((el) => {
      if (el.id === payload.id) {
        return payload;
      } else {
        return el;
      }
    });
    state.userContacts = [...contacts];
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

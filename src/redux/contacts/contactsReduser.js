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
    state.contactIsDeleted = false;
    state.contactIsUpdated = false;
  },
  [getUserContacts.fulfilled]: (state, { payload }) => {
    state.userContacts = [...payload];
    state.contactIsAdded = false;
    state.contactIsDeleted = false;
    state.contactIsUpdated = false;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    state.userContacts = state.userContacts.filter((el) => el.id !== payload);
    state.contactIsDeleted = true;
    state.contactIsAdded = false;
    state.contactIsUpdated = false;
  },
  [updateUserContacts.fulfilled]: (state, { payload }) => {
    state.contactIsUpdated = true;
    state.userContacts = state.userContacts.map((el) => {
      if (el.id === payload.id) return payload;
      return el;
    });
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

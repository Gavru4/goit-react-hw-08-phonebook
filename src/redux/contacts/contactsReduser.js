import { createReducer } from "@reduxjs/toolkit";
import { deleteContact, getContacts, putContact } from "./contactsOperation";

export const contactsRudeser = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload.id);
  },
  [putContact.fulfilled]: (state, { payload }) => [...state, payload],
});

export const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [putContact.pending]: () => true,
  [putContact.fulfilled]: () => false,
  [putContact.rejected]: () => false,
});

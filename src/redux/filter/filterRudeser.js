import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./filterAction";

const filterReduser = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default filterReduser;

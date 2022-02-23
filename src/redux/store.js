import { contactsRudeser, isLoadingReduser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    contacts: contactsRudeser,
    isloading: isLoadingReduser,
  },
});
export default store;

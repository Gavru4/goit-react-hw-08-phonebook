import { contactsRudeser, isLoadingReduser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";
import { configureStore } from "@reduxjs/toolkit";
import { userRudeser } from "./user/userReduser";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token"],
};

const userPersistedReducer = persistReducer(userPersistConfig, userRudeser);

const store = configureStore({
  reducer: {
    filter: filterReduser,
    contacts: contactsRudeser,
    user: userPersistedReducer,
    isloading: isLoadingReduser,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export const persistor = persistStore(store);

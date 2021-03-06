import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import clientReducer from "./clientRedux";
import productReducer from "./productRedux";
import employeeReducer from "./employeeRedux"
import itemReducer from "./itemRedux";
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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ item:itemReducer, employee:employeeReducer, cart:cartReducer, user: userReducer, product: productReducer, client:clientReducer });

 const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
         serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
       }),
})

export let persistor = persistStore(store);
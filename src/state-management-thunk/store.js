import { legacy_createStore as createStore , applyMiddleware  } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

import  rootReducer   from "./reducer/index";
// persist
import { persistStore , persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'// import redux-logger
import logger from "redux-logger";
// redux-thunk
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig , rootReducer);

 const store = createStore(persistedReducer , applyMiddleware(thunk , logger))

 const persistor = persistStore(store);

 export  {store, persistor}
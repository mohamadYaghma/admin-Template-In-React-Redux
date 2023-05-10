import { legacy_createStore as createStore , applyMiddleware  } from "redux";
import  combineReducers  from "./reducer/index";
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

const persistedReducer = persistReducer(persistConfig , combineReducers);

export const store = createStore(persistedReducer , applyMiddleware(thunk , logger))

export const persistor = persistStore(store);
import { legacy_createStore as createStore , applyMiddleware , compose } from "redux";

import reducers from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'// import redux-logger
import createSagaMiddleware from 'redux-saga'
import mySaga from "./saga";
import logger from "redux-logger";

const sagaMedelware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState', 'categoryState'],
    //whitelist:['productState'],
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMedelware , logger)
  ));

export const persistor = persistStore(store)

sagaMedelware.run(mySaga)
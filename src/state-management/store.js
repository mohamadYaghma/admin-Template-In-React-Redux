import {  legacy_createStore as createStore } from "redux";
import reducers from "./reducers/rootReducer";
import {} from 'redux-persist'



const store = createStore(reducers);

export default store; 


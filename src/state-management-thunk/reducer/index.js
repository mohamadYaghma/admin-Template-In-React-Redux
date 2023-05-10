import { combineReducers } from "redux";
import ProductThunkReducer from "./productThunkReducer"

export default combineReducers({
    ProductThunkState:ProductThunkReducer
})
import {combineReducers} from 'redux';
import { productReducer} from './productReducer';
import { countReducer } from './countReducer';

export default combineReducers({
    countState : countReducer ,
    productState : productReducer
})
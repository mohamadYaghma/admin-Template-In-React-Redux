import { INCREMENT , DECREMENT } from "../actions/actionType"; 

export const countReducer = function (state = 0  , action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1 ; 
        case DECREMENT:
            return state - 1 ; 
        default:
            return state ;
    }
} ;
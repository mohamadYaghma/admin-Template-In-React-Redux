import { PRODUCT_ADD , PRODUCT_REMOVE, PRODUCT_GET_ALL } from "../actions/actionType";

const initalState = [ {id:1 , title:"muse" , price:100} ,{id:2 , title:"kybord" , price:150}]

export const productReducer = function (state = initalState  , action ) {
    switch (action.type) {
        case PRODUCT_GET_ALL:
            return  [...state] ;

        case PRODUCT_ADD:
            return  [...state , action.payload] ;

        case PRODUCT_REMOVE:
            return  [...state.filter( q=> q.id != action.payload )] ;
        default : 
            return [...state] ;
    }
} ;
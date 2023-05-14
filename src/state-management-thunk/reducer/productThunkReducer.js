import {
    FETCH_PRODUCT_SUCC,
    FETCH_PRODUCT_FAILED,
    FETCH_PRODUCT_START,
    PRODUCT_REMOVE
} from "../action/actionTypes"


const initialState = {
    items : [] ,
    isLoding : true , 
    message : ''
}

function ProductThunkReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_PRODUCT_START:     
            return {items:[] , message:'' , isLoding:true};
        case FETCH_PRODUCT_SUCC:      
            return {items:action.payload , message:'' , isLoding:false};
        case FETCH_PRODUCT_FAILED:        
            return {items:[] , message:action.payload , isLoding:false};
        case PRODUCT_REMOVE:
            return  [...state.filter( q=> q.id !== action.payload )] ;
    
        default:
            return state;
    }
}

export default ProductThunkReducer;
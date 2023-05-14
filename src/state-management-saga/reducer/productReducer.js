import {ProductFetchFailed , ProductFetchSucc , ProductFetchRequest} from '../action/actionType';

const initialState = {
    items  : [] ,
    isLoading : true ,
    message : ''
}

function productReducer (state = initialState , action ){
    switch (action.type) {
        case ProductFetchRequest:
            return { ...state , isLoading:true}
        case ProductFetchSucc:
            return {  isLoading:false , items : action.products}
        case ProductFetchFailed:
            return {  isLoading:true , message : action.message    , items: []   }
        default:
            return state;
    }
}


export default productReducer;
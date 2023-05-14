import {CategoryFetchSucc ,CategoryFetchRequest, CategoryFetchFailed } from '../action/actionType'

const initialState = {
    items  : [] ,
    isLoading : true ,
    message : ''
}

function categoryReducer (state = initialState , action ){
    switch (action.type) {
        case CategoryFetchRequest:
            return { ...state , isLoading:true}
        case CategoryFetchSucc:
            return {  isLoading:false , items : action.categories}
        case CategoryFetchFailed:
            return {  isLoading:true , message : action.message    , items: []   }
        default:
            return state;
    }
}

export default categoryReducer;
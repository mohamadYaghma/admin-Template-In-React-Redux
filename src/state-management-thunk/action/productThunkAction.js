import {
    FETCH_PRODUCT_SUCC,
    FETCH_PRODUCT_FAILED,
    FETCH_PRODUCT_START
} from './actionTypes';

// action creator 
export function getAllProduct(dispatch){
    const apiUrl= "https://apitester.ir/api/Products" 
    dispatch(fetchProductStart());
    fetch(apiUrl)
    .then( response => response.json())
    .then(data => {
        dispatch( fetchProductSucc(data))
    })
    .catch( error=> {
        dispatch(fetchProductFailed(error))
    });
}


export const fetchProductStart=()=>({
    type:FETCH_PRODUCT_START
});

export const fetchProductSucc=(data)=>({
    type:FETCH_PRODUCT_SUCC,
    payload : data
});
export const fetchProductFailed=(errorMessage)=>({
    type:FETCH_PRODUCT_FAILED,
    payload:errorMessage
});


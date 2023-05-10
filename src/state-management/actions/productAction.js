import { PRODUCT_ADD ,  PRODUCT_GET_ALL , PRODUCT_REMOVE } from "./actionType";

export const productadd=(item)=>({
    type: PRODUCT_ADD ,
    payload : item
});

export const productremove=(id)=>({
    type: PRODUCT_REMOVE ,
    payload : id
});

export const productget=()=>({
    type: PRODUCT_GET_ALL
});
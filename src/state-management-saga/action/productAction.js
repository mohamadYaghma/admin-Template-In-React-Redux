import { ProductFetchRequest , ProductFetchSucc , ProductFetchFailed } from "./actionType";

export const productFetchRequest=()=>({
    type:ProductFetchRequest
})

export const productFetchFailed=()=>({
    type:ProductFetchFailed
})

export const productFetchSucc=()=>({
    type:ProductFetchSucc
})
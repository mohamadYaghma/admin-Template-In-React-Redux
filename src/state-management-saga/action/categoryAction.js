import { CategoryFetchRequest , CategoryFetchFailed , CategoryFetchSucc } from "./actionType";

export const categoryFetchRequest=()=>({
    type:CategoryFetchRequest
})

export const categoryFetchFailed=()=>({
    type:CategoryFetchFailed
})

export const categoryFetchSucc=()=>({
    type:CategoryFetchSucc
})
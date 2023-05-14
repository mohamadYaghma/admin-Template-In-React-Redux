import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CategoryFetchFailed , CategoryFetchRequest , CategoryFetchSucc , ProductFetchFailed , ProductFetchSucc , ProductFetchRequest } from './action/actionType';



const getCategoriesFromApi = () => fetch('https://apitester.ir/api/Categories').then(res => res.json());
const getProductsFromApi = () => fetch('https://apitester.ir/api/Products').then(resa => resa.json());

function* fetchCategories (action) {
    try {
        const categories = yield call(()=>getCategoriesFromApi());
        yield put({type :CategoryFetchSucc  , categories : categories})
    } catch (error) {
        yield put({type : CategoryFetchFailed , message: error.message})
    }
}

function* fetchProducts (action) {
    try {
        const products = yield call(()=>getProductsFromApi());
        yield put({type :ProductFetchSucc  , products : products})
    } catch (error) {
        yield put({type : ProductFetchFailed , message: error.message})
    }
}

function* mySaga (){
    yield takeEvery(CategoryFetchRequest , fetchCategories);
    yield takeEvery(ProductFetchRequest , fetchProducts);
}

// function* mySaga (){
//     yield takeLatest(CategoryFetchRequest , fetchCategories)
// }


export default mySaga
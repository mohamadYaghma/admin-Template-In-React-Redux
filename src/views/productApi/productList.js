import React from 'react'
// redux
import { useDispatch , useSelector } from 'react-redux'
// import { productremove } from '../../state-management/actions/productAction'
import { fetchProductremove } from '../../state-management-thunk/action/productThunkAction'
import {getAllProduct} from '../../state-management-thunk/action/productThunkAction'

export const ProductList = () => {

    const products = useSelector( store => store.ProductThunkState.items);
    const isLoding = useSelector( store => store.ProductThunkState.isLoding);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getAllProduct(dispatch);
    }, [])
    
  return (
    <div>
        <h2>productList</h2>
            { isLoding ? <div>loading data from server ... </div> : null }
            <ul style={{float:'left'}}>
                {
                    products.map( item => 
                        <li key={item.productId}> {item.productName} - {item.unitPrice} - 
                        <button onClick={()=> dispatch(fetchProductremove(item.productId))}>remove</button>
                        </li>
                        )
                }
            </ul>
    </div>
  )
}

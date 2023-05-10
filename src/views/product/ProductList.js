import React from 'react'
import {useSelector  , useDispatch} from 'react-redux'
import {productremove} from '../../state-management/actions/productAction'

export const ProductList = () => {
    const products = useSelector( store => store.productState) 
    const dispatch = useDispatch();

  return (
    <div>
      <h2>ProductList : </h2>
        <ul>
            {
                products.map(item =>
                    <li key={item.id}>name : {item.title} - price : {item.price} 
                    <button onClick={()=> dispatch(productremove(item.id))}>deleted</button> 
                    </li>
                    )
            }
        </ul>

    </div>
  )
}

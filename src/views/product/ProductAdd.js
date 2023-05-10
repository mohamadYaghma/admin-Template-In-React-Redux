import React , {useRef} from 'react'
import { useDispatch } from 'react-redux'
import {productadd} from 'state-management/actions/productAction'

export const ProductAdd = () => {
    const dispatch  = useDispatch();
    const id = useRef();
    const title = useRef();
    const price = useRef();

const save = () =>{
    let item = {} ; 
    item.id = id.current.value ; 
    item.title = title.current.value ; 
    item.price = price.current.value ; 
    console.log(item);
    dispatch(productadd(item))
}

  return (
    <div>
        <h3>Product Add</h3>
        <div>id : <input ref={id} /> </div>
        <div>name : <input ref={title} /></div>
        <div>price :<input ref={price} /> </div>
        <button onClick={()=> save()}>save</button> 
    </div>
  )
}

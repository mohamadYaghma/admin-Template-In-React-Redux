import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {increment , decrement} from '../state-management/actions/countAction'

export const Counter = () => {
    const counter =  useSelector( state => state.countState)
    const dispath  = useDispatch()
  return (
    <div className='center_item'>
        <h1>REDUX SAMPLE</h1>
    <label>Counter Value : {counter} </label>
    <br />
    <div className='bt_center'>
        <button onClick={()=> dispath(increment())}>+1 </button>
        <button onClick={()=> dispath(decrement())}>-1 </button>
    </div>
    </div>
    )
}

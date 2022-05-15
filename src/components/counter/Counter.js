import React from 'react';
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux';
import {decreament, increament} from '../../store/actions/Actions.js';

export default function Conter() {
  const dispatch = useDispatch();
    let num = useSelector((store)=> store.count);
  return (
    <div className='container'>
        <button onClick={()=> dispatch(decreament())}>-</button>
        <p>{num}</p>
        <button onClick={()=> dispatch(increament())}>+</button>
    </div>
  )
}

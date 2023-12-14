import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from './actions/index'

function App() {
  const mystate=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch()
  return (
    <div className="text-center mt-10">
      <h1 className=" text-white text-6xl font-bold mb-5">{mystate}</h1>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>dispatch(incNumber())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>dispatch(decNumber())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;

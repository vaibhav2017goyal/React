import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter]=useState(0)
  
  const addvalue=()=>{
    if(counter>=20){
      setcounter(counter)
    }else
    setcounter(counter+1)
  }
  const removevalue=()=>{
    if(counter<=0){
    setcounter(counter)
  }
  else
  setcounter(counter-1)
  }

  return (
    <>
    <h1> React hook</h1>
    <h2>counter value: {counter} </h2>

    <button id='addvalue' onClick={addvalue}>Add Value</button>
    <button onClick={removevalue} >Remove Value</button>
      </>
  )
}

export default App

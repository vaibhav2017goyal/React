

import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [cA,setCA]=useState(false)
  const [p,setP]=useState("")
//use ref
  const pRef=useRef(null)

  let pG=useCallback(()=>{
    let pass=""
    let str=  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(cA) str+="`~@#$%^&*-_=+[]{}"
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setP(pass)
  },[length,numberAllowed,cA,setP])

  const copytoclip=useCallback(()=>{
    pRef.current?.select()
    window.navigator.clipboard.writeText(p)
  },[p])

  useEffect(()=>{
    pG()
  },[length,numberAllowed,cA,pG])
  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={p}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={pRef}
           
        />
        <button
        onClick={copytoclip}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={cA}
              id="characterInput"
              onChange={() => {
                  setCA((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  );
}

export default App;

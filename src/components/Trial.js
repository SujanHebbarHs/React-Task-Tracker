import React,{ useState } from 'react'

const Trial = () => {
    const [val, setVal]= useState({count:2,theam:'white'}); 
    const count = val.count;
    const theam =val.theam;

    const down = ()=>{
        setVal((p)=>{
            return { ...p, count:p.count+3 };

          });
    }

  return (
    <>
      <button onClick={down}>-</button>
      <span>{count}</span>
      <span>{theam}</span>
      <button>+</button>
    </>
  )
}

export default Trial

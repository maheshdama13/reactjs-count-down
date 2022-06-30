import React, {useState, useEffect} from 'react'

export default function CountDown() {
  const [timer, setTimer] = useState(0);
  

  const startHandler = () => {

  }

  const pauseHandler = () => {

  }

  const resetHandler = () => {

  }

  return (
    <div>
      <input type="number" placeholder='minutes' />&nbsp;
      <input type="number" placeholder='seconds' />&nbsp;
      <button className='btn btn-primary m-1' onClick={startHandler}>Start</button>
      <button className='btn btn-primary m-1' onClick={pauseHandler}>Pause/Continue</button>
      <button className='btn btn-primary m-1' onClick={resetHandler}>Reset</button>
      <h2>Count Down</h2>
      <h1>00:00</h1>
    </div>
  )
}

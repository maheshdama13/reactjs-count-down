import React, {useState} from 'react'

export default function CountDown() {
  [timer, setTimer] = useState({
                                minutes: "00",
                                seconds: "00"
                              })

  return (
    <div>
      <input type="number" placeholder='minutes' />&nbsp;
      <input type="number" placeholder='seconds' />&nbsp;
      <button className='btn btn-primary m-1'>Start</button>
      <button className='btn btn-primary m-1'>Pause/Continue</button>
      <button className='btn btn-primary m-1'>Reset</button>
      <h2>Count Down</h2>
      <h1>00:00</h1>
    </div>
  )
}

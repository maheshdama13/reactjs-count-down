import React from 'react'

export default function CountDown() {
  return (
    <div>
      <input type="text" placeholder='minutes' />&nbsp;
      <input type="text" placeholder='seconds' />&nbsp;
      <button className='btn btn-primary m-1'>Start</button>
      <button className='btn btn-primary m-1'>Pause/Continue</button>
      <button className='btn btn-primary m-1'>Reset</button>
      <h2>Count Down</h2>
      <h1>00:00</h1>
    </div>
  )
}

import React from 'react'

export default function CountDown() {
  return (
    <div>
      <input type="text" placeholder='minutes' />&nbsp;
      <input type="text" placeholder='seconds' />&nbsp;
      <button className='btn'>Start</button>
      <button className='btn'>Pause/Continue</button>
      <button className='btn'>Reset</button>
    </div>
  )
}

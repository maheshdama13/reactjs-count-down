import React from 'react'

export default function CountDown() {
  return (
    <div>
      <input type="text" placeholder='minutes' />&nbsp;
      <input type="text" placeholder='seconds' />&nbsp;
      <button className='btn btn-primary mr-2'>Start</button>
      <button className='btn btn-primary mr-2'>Pause/Continue</button>
      <button className='btn btn-primary mr-2'>Reset</button>
    </div>
  )
}

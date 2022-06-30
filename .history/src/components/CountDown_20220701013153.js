import React from 'react'

export default function CountDown() {
  return (
    <div>
      <input type="text" placeholder='minutes' />&nbsp;
      <input type="text" placeholder='seconds' />&nbsp;
      <button className='btn btn-default'>Start</button>
      <button className='btn btn-default'>Pause/Continue</button>
      <button className='btn btn-default'>Reset</button>
    </div>
  )
}

import React from 'react'

export default function CountDown() {
  return (
    <div>
      <input type="text" placeholder='minutes' />&nbsp;
      <input type="text" placeholder='seconds' />&nbsp;
      <button>Start</button>
      <button>Pause/Continue</button>
      <button>Reset</button>
    </div>
  )
}

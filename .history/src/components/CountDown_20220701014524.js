import React, {useState, useEffect, useRef} from 'react'

export default function CountDown() {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(0);

  const formData = useRef(null)

  /* useEffect(() => {
    console.log(timer)
    console.log("timer----------")
    return () => {
      // cleanup
    };
  }, [timer]); */

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer-1);
    }, 1000);

    console.log(timer)
    console.log("timer----------")

    return () => clearInterval(interval);
  }, [timer]);

  const startHandler = () => {
    const form = formData.current
    let minutes = form['minutes'].value;
    let seconds = form['seconds'].value;
    let timerVal = minutes*60 + seconds;
    setTimer(timerVal);
  }

  const pauseHandler = () => {

  }

  const resetHandler = () => {

  }

  return (
    <div>
      <form ref={formData}>
        <input name='minutes' type="number" placeholder='minutes' />&nbsp;
        <input name='seconds' type="number" placeholder='seconds' />&nbsp;
        <button type="button" className='btn btn-primary m-1' onClick={startHandler}>Start</button>
        <button type="button" className='btn btn-primary m-1' onClick={pauseHandler}>Pause/Continue</button>
        <button type="button" className='btn btn-primary m-1' onClick={resetHandler}>Reset</button>
      </form>
      
      <h2>Count Down</h2>
      <h1>00:00</h1>
    </div>
  )
}

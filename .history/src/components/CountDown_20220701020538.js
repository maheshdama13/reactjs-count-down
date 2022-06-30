import React, {useState, useEffect, useRef} from 'react'

export default function CountDown() {
  const [timer, setTimer] = useState(0);
  const [formattedTimer, setFormattedTimer] = useState("00:00");
  const [isTimerRunning, setIsTimerRunning] = useState(0);

  const formData = useRef(null)

  useEffect(() => {
    let interval = 0;
    if(isTimerRunning === 1) {
      interval = setInterval(() => {
        if(timer > 0)
          setTimer(timer-1);
          setFormattedTimer(timer)
      }, 1000);
    }
    

    return () => clearInterval(interval);
  }, [timer, isTimerRunning]);

  const startHandler = () => {
    setIsTimerRunning(1);
    const form = formData.current
    let minutes = form['minutes'].value;
    let seconds = form['seconds'].value;
    let timerVal = Number(minutes*60) + Number(seconds);
    setTimer(timerVal);
  }

  const pauseHandler = () => {
    setIsTimerRunning(prevState => {
      if(prevState === 1) {
        return 0
      } else {
        return 1;
      }
    });
  }
    
  const resetHandler = () => {
    formData.current.reset();
    setIsTimerRunning(0);
    setTimer(0);
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
      <h1>{() => formattedTimer()}</h1>
    </div>
  )
}

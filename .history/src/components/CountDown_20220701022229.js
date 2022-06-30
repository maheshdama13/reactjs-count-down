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
        }, 1000);
      }
      
      
    setFormattedTimer(formatTimer(timer))
    return () => clearInterval(interval);
  }, [timer, isTimerRunning]);

  const formatTimer = (timeData) => {
    let m = Math.floor(timeData % 3600 / 60);
    m = (m<=9) ? '0'+m : m;
    let s = Math.floor(timeData % 3600 % 60);
    s = (s<=9) ? '0'+s : s;
    return m+':'+s;
  }

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
    <div className='container'>
    <h1>Count Down Using React JS <small>(Seperate Minutes and Seconds)</small></h1>
      <form ref={formData}>
        <div class="d-flex">
          <input className=' d-inline' name='minutes' type="number" placeholder='minutes' />&nbsp;
          <input className=' d-inline' name='seconds' type="number" placeholder='seconds' />&nbsp;
        </div>
        <div className='mt-2'>
          <button type="button" className='btn btn-primary mr-1' onClick={startHandler}>Start</button>
          <button type="button" className='btn btn-primary mx-1' onClick={pauseHandler}>Pause/Continue</button>
          <button type="button" className='btn btn-primary mx-1' onClick={resetHandler}>Reset</button>
        </div>
      </form>
      
      
      <h1 className='display-1'>{formattedTimer}</h1>
    </div>
  )
}

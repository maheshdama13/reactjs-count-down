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
    let interval = 0;
    if(isTimerRunning) {
      interval = setInterval(() => {
        setTimer(timer-1);
      }, 1000);
    }
    

    return () => clearInterval(interval);
  }, [timer]);

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
      console.log(prevState)
      console.log("-------prevState")
      if(prevState === 1) {
        return 0
      } else {
        return 1;
      }
    });
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
      <h1>{timer}</h1>
    </div>
  )
}

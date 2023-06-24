import React, { useRef, useState } from 'react';
import './S.css';
export default function Stopwatch() {
  const timerIdRef = useRef(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);

  const startHandler = () => {
    setActive(true);
    setPause(true);
    timerIdRef.current = setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
  };

  const pauseHandler = () => {
    clearInterval(timerIdRef.current);
    setPause(false);
  };

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    setActive(false);
    setPause(false);
    setCount(0);
  };

  const formatTime = () => {
    const getMseconds = `0${count % 6}`.slice(-3);
    const getSeconds = `0${count % 60}`.slice(-2);
    const minutes = `${Math.floor(count / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(count / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}: ${getMseconds}`;
  };

  return (
    <div className='a'>
      <div className='b'>
      <div className='t'>Timer: {formatTime()}</div>
      <div className='con'>
        {!active && !pause ? (
          <button className='btn' onClick={startHandler}>Start</button>
        ) : (
          <>
            {pause ? (
              <>
                <button className='btn' onClick={pauseHandler}>Pause</button>
                <button className='btn' onClick={resetHandler}>Reset</button>
              </>
            ) : (
              <button className='btn' onClick={startHandler}>Resume</button>
            )}
          </>
        )}
      </div>
    </div>
    </div>
  );
}

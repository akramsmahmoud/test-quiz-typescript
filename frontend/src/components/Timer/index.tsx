import React from 'react';
import timer from '../../timer.svg';
import './timer.css';

const Timer = (props: { callback: () => void; seconds: number }) => {
  const { callback, seconds } = props;
  const [counter, setCounter] = React.useState(seconds);

  //counter format
  var mins = ~~((counter % 3600) / 60);
  var secs = ~~counter % 60;
  let ret = '';
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;

  React.useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      setCounter(seconds);
      callback();
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="timer">
      <img src={timer} alt="timer" /> {ret}
    </div>
  );
};

export default Timer;

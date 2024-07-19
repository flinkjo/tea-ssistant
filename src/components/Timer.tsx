import { useCallback, useEffect, useState } from "react";

const now = Date.now();
const fourMinutes = 4 * 60 * 1000;
const deadline = new Date(now + fourMinutes);

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    const time = Date.parse(deadline.toString()) - Date.now();

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <div className="bg-gradient-to-r from-orange-200 via-red-200 to-indigo-200 block p-2 rounded-3xl drop-shadow-md text-center mt-5">
      <div className="bg-stone-100 w-full h-full rounded-full px-5 py-3 text-red-300 text-8xl">
        <h2 id="timeStamp">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
}

export default Timer;

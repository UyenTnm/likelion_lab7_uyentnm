import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time's up");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft > 0 ? (
        <p>Countdown from: {timeLeft} seconds</p>
      ) : (
        <p>Hello Timer!</p>
      )}
    </div>
  );
}

export default Countdown;

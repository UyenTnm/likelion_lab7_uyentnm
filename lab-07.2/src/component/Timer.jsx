import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(10); // bắt đầu từ 10 giây

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Timeout!");
      return; // Dừng khi bằng 0
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // giảm mỗi giây

    return () => clearInterval(timer); // clearInterval khi component unmount hoặc timeLeft thay đổi
  }, [timeLeft]);

  return (
    <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "50px" }}>
      {timeLeft > 0 ? (
        <p>Countdown: {timeLeft} seconds</p>
      ) : (
        <p style={{ color: "red" }}>Hello Timeout!</p>
      )}
    </div>
  );
}

export default Timer;

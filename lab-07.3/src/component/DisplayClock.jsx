// import React from "react";
import Hook from "../hook/Hook";

function ClockDisplay() {
  const currentTime = Hook();

  return (
    <div
      style={{
        backgroundColor: "#1e90ff", // xanh dương
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "300px",
        margin: "50px auto",
        fontSize: "2rem",
        fontFamily: "monospace",
      }}
    >
      🕒 Current Time: {currentTime}
    </div>
  );
}

export default ClockDisplay;

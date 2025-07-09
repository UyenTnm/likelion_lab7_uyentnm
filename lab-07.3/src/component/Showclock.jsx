import ClockHooks from "../hook/ClockHooks";

function Showclock() {
  const currentTime = ClockHooks();

  return (
    <div
      style={{
        backgroundColor: "#1e90ff",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      Current Time: {currentTime}
    </div>
  );
}

export default Showclock;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Hook from "./hook/Hook";
// import Displayclock from "./component/DisplayClock";
import Showclock from "./component/Showclock";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <p>What time is it ? </p>
      <Showclock />
    </>
  );
}

export default App;

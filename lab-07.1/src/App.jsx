// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Car from "./component/Car";
import Color from "./component/Color";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Select your car</h1>
      <Car /> <br></br>
      <Color />
    </>
  );
}

export default App;

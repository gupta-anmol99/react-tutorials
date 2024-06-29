import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Anmol",
    id: "171114020"
  }

  return (
    <>
      <h1 className="bg-green-300 text-black rounded-xl p-4 mb-5">
        This is Tailwind
      </h1>

      <Card Obj = {myObj}/>

    </>
  );
}

export default App;

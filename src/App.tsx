import React from "react";
import "./App.css";
import InputField from "./InputField";

function App() {
  let name: [string, number];

  name = ["Sahidul", 27];
  type X = {
    a: string;
    b: number;
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;

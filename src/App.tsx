import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name: [string, number];

  name = ["Sahidul", 27];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello TypeScript</h2>
        <h6>
          I am {name[0]}, age is {name[1]}
        </h6>
      </header>
    </div>
  );
}

export default App;

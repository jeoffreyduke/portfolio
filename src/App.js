import React from "react";
import "./App.css";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <header>
        <button className="btn story">story</button>
        <button className=" btn work">work</button>
      </header>
      <Story />
    </div>
  );
}

export default App;

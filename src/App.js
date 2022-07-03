import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";

function App() {
  return (
    <div className="App">
      <DiaryEditor />
    </div>
  );
}

export default App;

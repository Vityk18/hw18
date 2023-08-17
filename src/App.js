import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer/Timer.js";

function App() {
  return (
    <div className="App">
      <Timer time="60" step="1000" autostart={true} />
    </div>
  );
}

export default App;

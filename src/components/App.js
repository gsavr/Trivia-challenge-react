import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:difficulty/:amount" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:difficulty/:amount" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

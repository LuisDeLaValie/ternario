import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [showMeansaje, setShowMeansaje] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowMeansaje(!showMeansaje)}>
        {showMeansaje ? "Ocultar" : "Mostrar"}
      </button>

      {showMeansaje? <p>Hola</p>:null }
    </div>
  );
}

export default App;

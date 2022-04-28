import React, { useContext } from "react";
import "./App.css";
import ScoreBoard from "./components/scoreBoard/scoreBoard";
import OptionContainer from "./components/optionsContainer/optionsContainer";
import GameArea from "./components/gameArea/gameArea";
import { mainContext } from "./context/mainContext";

function App() {
  const { score } = useContext(mainContext);
  return (
    <div className="App">
      <ScoreBoard score={score} />
      {/* <OptionContainer /> */}
      <GameArea />
    </div>
  );
}

export default App;

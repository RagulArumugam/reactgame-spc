import React, { useContext } from "react";
import StoneImg from "../../assets/stone.png";
import PaperImg from "../../assets/paper.png";
import CisorImg from "../../assets/cisor.png";
import { mainContext } from "../../context/mainContext";
import "./gameArea.scss";

const GameArea = () => {
  const { setOption } = useContext(mainContext);
  return (
    <div className="game-area-wrapper">
      <div className="game-area-container">
        <div className="our-option">
          <span>YOU PICKED</span>
          <div className="image-container" onClick={() => setOption("stone")}>
            <img src={StoneImg} />
          </div>
        </div>
        <div className="result-container">
          <span>YOU WIN</span>
          <button>PLAY AGAIN</button>
        </div>
        <div className="c-option">
          <span>THE HOUSE PICKED</span>
          <div className="image-container" onClick={() => setOption("stone")}>
            <img src={StoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameArea;

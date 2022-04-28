import React from "react";
import "./scoreBoard.scss";

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board-wrapper">
      <div className="score-board-container">
        <div className="score-board-title">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
        <div className="score-board">
          <div className="title">Score</div>
          <div className="score">{score}</div>
        </div>
      </div>
    </div>
  );
};
export default ScoreBoard;

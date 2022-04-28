import React, { useContext } from "react";
import StoneImg from "../../assets/stone.png";
import PaperImg from "../../assets/paper.png";
import CisorImg from "../../assets/cisor.png";
import "./optionContainer.scss";
import { mainContext } from "../../context/mainContext";

const OptionContainer = () => {
  const { setOption } = useContext(mainContext);

  return (
    <div className="option-wrapper">
      <div className="option-container">
        <div className="top-container">
          <div className="image-container" onClick={() => setOption("stone")}>
            <img src={StoneImg} />
          </div>
          <div className="image-container" onClick={() => setOption("paper")}>
            <img src={PaperImg} />
          </div>
        </div>
        <div className="bottom-container">
          <div className="image-container" onClick={() => setOption("cisor")}>
            <img src={CisorImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionContainer;

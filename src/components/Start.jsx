import React, { useRef } from "react";
import logo from "../images/kbc logo.png"

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };

  return (
    <>
      <div className="container-start"></div>
      <div className="zIndex">
        <img src={logo} alt="" />
        <div className="input">
          <input
            type="text"
            placeholder="Enter Name"
            ref={inputRef}
            className="form-control"
          />
          <button className="startBtn" onClick={handleClick}>
            Start Game
          </button>
        </div>
      </div>
    </>
  );
};

export default Start;

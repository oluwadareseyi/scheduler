import React from "react";
import "./Input.scss";

const Input = () => {
  return (
    <div>
      <div className="input-comp">
        <label className="label">Your name</label>
        <div className="input">
          <input placeholder="Enter here" />
          <div className="check-con">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <polyline
                fill="none"
                stroke="#69c3b0"
                stroke-width="60px"
                className="check"
                points="114,245 194,323 370,140"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;

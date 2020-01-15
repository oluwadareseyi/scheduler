import React from "react";
import "./Input.scss";

const Input = props => {
    
  return (
    <div>
      <div className="input-comp">
        <label className="label">Your {props.label}</label>
        <div className="input">
          <input {...props.elementConfig}
           onChange={props.changed} 
           value={props.value} />
          <div className="check-con">
            <svg
              className={`svg ${props.value.trim().length >= 2 ? "opaque" : "trans"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <polyline
                fill="none"
                stroke="#69c3b0"
                stroke-width="60px"
                className={`check ${props.value.trim().length >= 2 ? "animate" : ""}`}
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

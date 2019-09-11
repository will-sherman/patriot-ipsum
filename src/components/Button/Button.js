import React from "react";
import "./Button.css";

function Button(props) {
    return (
      <div>
        <button className="Button" onClick={props.onclick}>
          {props.text}
        </button>
      </div>
    );
  }

export default Button;
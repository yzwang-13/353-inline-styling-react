import React from "react";
import ReactDOM from "react-dom";

const cunstomStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

// can change style on the go
// cunstomStyle.color = "blue";

ReactDOM.render(
  <h1 style={cunstomStyle}>Hello World!</h1>,
  document.getElementById("root")
);

import React from "react";
import "./Add.css";

function Add() {
  return (
    <div className="main">
      <button onClick={() => {window.localStorage.clear()}}>clear</button>
    </div>
  );
}

export default Add;
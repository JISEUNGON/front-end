import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="main">
      <p>search</p>
      <button onClick={() => window.localStorage.clear()}>초기화</button>
    </div>
  );
}

export default Search;
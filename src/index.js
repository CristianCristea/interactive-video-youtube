import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

const API_KEY = "AIzaSyC259JkMDG5X4MCBsSZNvDKR8enzANBDCY";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Render component
ReactDOM.render(<App />, document.getElementById("root"));

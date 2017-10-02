import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyC259JkMDG5X4MCBsSZNvDKR8enzANBDCY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "pokemon" }, videos => {
      this.setState({ videos });
      // this.setState({videos: videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Render component
ReactDOM.render(<App />, document.getElementById("root"));

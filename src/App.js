import React from "react";
import "./index.css";
import Menu from "./MenuCategory";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Welcome to Chef Chu's Restaurant</h1>
        <button>Home</button>
        <button className="btn02">Category</button>
        <hr></hr>
        <h4>Streamlinity UI test assignment starts below this line..</h4>
        <hr></hr>
        <div>
          <h4>MenuCategory</h4>
          <Menu />
        </div>
      </div>
    );
  }
}
export default App;

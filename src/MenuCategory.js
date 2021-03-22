import React from "react";
import ItemDetail from "./ItemDetail";
import LeftList from "./LeftList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MenuCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftList: null
    };
  }
  componentDidMount = () => {
    fetch(`https://stream-restaurant-menu-svc.herokuapp.com/category`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ leftList: data });
      });
  };

  render() {
    const list = this.state.leftList;
    return (
      <Router>
        <div className="container" style={{ display: "flex" }}>
          <div className="col-md-4">
            <LeftList list={this.state.leftList} />
          </div>
          <div className="col-md-8">
            <Route exact path="/" render={() => <div />} />
            {list && (
              <Route
                path="/categories/items/:shortName"
                render={({ match }) => (
                  <ItemDetail
                    key={match.params.shortName}
                    shortName={match.params.shortName}
                  />
                )}
              />
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default MenuCategory;

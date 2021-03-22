import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class LeftList extends Component {
  render() {
    const list = this.props.list;
    const listArray = [];
    if (list !== null && list.length > 0) {
      list.forEach((item, key) => {
        const linkName = item.name + "- (" + item.short_name + ")";
        listArray.push(
          <li key={key}>
            <Link to={`/categories/items/${item.short_name}`}>{linkName}</Link>
          </li>
        );
      });
    }
    return <div>{listArray}</div>;
  }
}

export default LeftList;

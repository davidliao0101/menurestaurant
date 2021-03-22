import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortName: this.props.shortName,
      info: []
    };
  }

  componentDidMount() {
    fetch(
      `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.state.shortName}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          info: data
        });
      });
  }

  renderTableData() {
    return this.state.info.map((item, index) => {
      const { name, description, id } = item;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{description}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Items in Category: ({this.state.shortName})</h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemDetail;

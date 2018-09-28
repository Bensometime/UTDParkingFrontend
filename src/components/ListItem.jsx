import React, { Component } from "react";

class ListItem extends Component {
  render(props) {
    return <h1>it worked...? {this.props.text}</h1>;
  }
}

export default ListItem;

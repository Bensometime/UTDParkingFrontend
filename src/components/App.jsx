import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

class App extends Component {
  render(props) {
    return (
      <div>
        <h1>Prop: {this.props.name}</h1>
        {(function() {
          let rows = [];
          for (let i = 0; i < 4; i++) {
            rows.push(<ListItem text={i} key={i} />);
          }
          return rows;
        })()}
      </div>
    );
  }
}

export default App;

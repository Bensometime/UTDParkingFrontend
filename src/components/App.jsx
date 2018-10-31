import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
let testJson = require("./test.json");

const parkingStatusUrl =
  "https://us-central1-utdapi-217616.cloudfunctions.net/function-1";

fetch("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
console.log(testJson);

class App extends Component {
  render(props) {
    return (
      <div>
        <h1>Prop: {this.props.name}</h1>
      </div>
    );
  }
}

export default App;

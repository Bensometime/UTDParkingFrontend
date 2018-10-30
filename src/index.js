import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App name="ben" />, document.getElementById("root")); //Hi
registerServiceWorker();

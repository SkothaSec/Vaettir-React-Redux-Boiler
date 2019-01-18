import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Custom Modules
import App from "./App";

// Styles
import "./components/styles/index.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

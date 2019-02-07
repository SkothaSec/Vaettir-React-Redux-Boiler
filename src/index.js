import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Custom Modules
import App from "./components/App";

// Styles
import "./styles/index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

import React, { Component } from "react";

// Custom Modules

// Styles and SVG
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: ""
        };
    }

    componentDidMount() {
        console.log({
            logOrigin: "App.js: componentDidMount()",
            errorMessage: this.state.errorMessage
        });
    }
    renderContent() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default App;

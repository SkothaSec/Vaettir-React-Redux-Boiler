import React, { Component } from "react";

// Custom Modules
import AppLayout from "./layout/AppLayout";
// Styles and SVG
import "../assets/styles/App.scss";

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
                <AppLayout />
            </div>
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default App;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Custom Modules
import { NavBarContent } from '../content/AppContent';

// Styles and SVG
import "../../assets/styles/NavBar.scss";


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: ""
        };
    }

    componentDidMount() {
        console.log({
            logOrigin: "NavBar.js: componentDidMount()",
            errorMessage: this.state.errorMessage
        });
    }

    renderContent() {
        return (
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default NavBar;

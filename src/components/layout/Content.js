/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Custom Modules
// Styles and SVG
import "../../styles/AppLayout.scss";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: ""
        };
    }

    componentDidMount() {
        console.log({
            logOrigin: "footer.js: componentDidMount()",
            errorMessage: this.state.errorMessage
        });
    }

    renderContent() {
        return (
            <div className="app-content">
                <div class="content text">
                    <h1 className="title">Content for page!</h1>
                    <h3 className="is-size-5">Ordered Lists</h3>
                    <ol class="is-lower-alpha">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                    <ol class="is-lower-roman">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                    <ol class="is-upper-alpha">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                    <ol class="is-upper-roman">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                </div>
            </div>
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default Content;

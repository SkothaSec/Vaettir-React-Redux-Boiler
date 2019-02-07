/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Custom Modules
import { FooterContent } from "../content/AppContent";
// Styles and SVG
import "../../styles/AppLayout.scss";


class Footer extends Component {
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
            <div className="NavBar">
                <footer class="footer">
                    <div class="content has-text-centered">
                        <FooterContent />
                    </div>
                </footer>
            </div>
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default Footer;

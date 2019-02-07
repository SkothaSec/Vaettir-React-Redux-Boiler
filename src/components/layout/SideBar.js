/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Custom Modules
// Styles and SVG
import "../../styles/AppLayout.scss";

export default class SideBar extends Component {
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
            <div className="app-sidebar">
                <nav class="panel">
                    <p class="panel-heading">repositories</p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="text" placeholder="search" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-search" aria-hidden="true" />
                            </span>
                        </p>
                    </div>
                    <p class="panel-tabs">
                        <a class="is-active">all</a>
                        <a>public</a>
                        <a>private</a>
                        <a>sources</a>
                        <a>forks</a>
                    </p>
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true" />
                        </span>
                        bulma
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true" />
                        </span>
                        marksheet
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true" />
                        </span>
                        minireset.css
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true" />
                        </span>
                        jgthms.github.io
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-code-branch" aria-hidden="true" />
                        </span>
                        daniellowtw/infboard
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-code-branch" aria-hidden="true" />
                        </span>
                        mojs
                    </a>
                    <label class="panel-block">
                        <input type="checkbox" />
                        remember me
                    </label>
                    <div class="panel-block">
                        <button class="button is-link is-outlined is-fullwidth">
                            reset all filters
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

import React from "react";

// Assets
import logoImage from "../../assets/images/logo.svg";

export const NavBarBrand = props => {
    return (
        <div>
            <a class="navbar-item is-size-5" href="https://bulma.io">
                <img alt="Logo" src={logoImage} width="50" height="28" /> Vaettir
            </a>

            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
        </div>
    );
};

export const NavBarMenu = props => {
    return (
        <div>
            <div class="navbar-start">
                <a class="navbar-item">Home</a>

                <a class="navbar-item">Documentation</a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More</a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Jobs</a>
                        <a class="navbar-item">Contact</a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">Report an issue</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const NavBarEnd = props => {
    return (
        <div>
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">Log in</a>
                </div>
            </div>
        </div>
    );
};
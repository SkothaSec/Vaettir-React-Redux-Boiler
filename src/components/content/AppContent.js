import React from "react";

// Custom Modules
import { NavBarBrand, NavBarMenu, NavBarEnd } from "./NavBarContent";

export const NavBarContent = props => {
    return (
        <div>
            <div class="navbar-brand">
                <NavBarBrand />
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <NavBarMenu />
            </div>
            <div class="navbar-end">
                <NavBarEnd />
            </div>
        </div>
    );
};

export const FooterContent = props => {
    return (
        <div>
            <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source
                code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website
                content is licensed{" "}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
        </div>
    );
};

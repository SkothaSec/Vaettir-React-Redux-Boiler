import React, { Component } from "react";

// Custom Modules
import NavBar from "./NavBar";
import Footer from "./Footer";
import Content from "./Content";
// Styles
import "../../assets/styles/AppLayout.scss";
import SideBar from "./SideBar";

export default class AppLayout extends Component {
    render() {
        return (
            <div className="app-layout wrapper">
                <div className="app-header">
                    <NavBar />
                </div>
                <div className="app-content content text">
                    <Content />
                </div>
                <div className="app-sidebar">
                    <SideBar />
                </div>
                <div className="app-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

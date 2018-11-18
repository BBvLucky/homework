import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../../style.scss";

import Menu from "./Menu.jsx";
import SimpleMenu from "./SimpleMenu.jsx";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-wrapper">
                    <Menu />
                    <SimpleMenu />
                </div>
            </header>
        )
    }
}

export default Header;
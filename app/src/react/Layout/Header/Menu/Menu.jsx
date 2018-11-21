import React, { Component } from "react";
import "../../../../style.scss";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.menu = [{title: 'Home', link: '#page'}, {title: 'Articles', link: '#articles'}, {title: 'About', link: '#'}, {title: 'Authors', link: '#'}];
        this.login = <a href="#">Login</a>;
    }
    render() {
        return (
                <nav className = "header-nav">
                    {this.menu.map((menuData, menuIndex) => {
                    return <a key={`nav-link-${menuIndex}`} href={menuData.link} className = "header-nav-link">{menuData.title}</a>
                    })}
                </nav>
        )
    }
}

export default Menu;
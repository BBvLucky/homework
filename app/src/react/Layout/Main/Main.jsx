import React, { Component } from "react";
import Content from "./Content/Content.jsx";
import Aside from "./Aside/Aside.jsx";
import NavTest from "./NavTest/NavTest.jsx";

import "../../../style.scss";
import ArticleBody from "./Article/ArticleBody.jsx";


class Main extends Component {
    render() {
        return (
            <main className="main">
                <NavTest />
                <Aside />
            </main>
        )
    }
}

export default Main;
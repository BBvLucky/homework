import React, { Component } from "react";
import Article from "./Article.jsx";
import Aside from "./Aside.jsx";

import "../../style.scss";

class Main extends Component {
    render() {
        return (
            <section className="main">
                <Article />
                <Aside />
            </section>
        )
    }
}

export default Main;
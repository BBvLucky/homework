import React, { Component } from "react";

import "../../style.scss";

import Search from "./Search.jsx";
import Themes from "./Themes.jsx";
import Recomendations from "./Recommendations.jsx";
import MostPopular from "./Most-popular.jsx";
import Advertisments from "./Advertisments.jsx";

class Aside extends Component {
    render() {
        return (
            <aside className="main-aside">
                <Search />
                <Themes />
                <Recomendations />
                <MostPopular />
                <Advertisments />
            </aside>
        )
    }
}

export default Aside;
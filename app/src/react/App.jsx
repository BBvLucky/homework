import React, { Component, PureComponent }from "react";
import "../style.scss";

import Page from "./Layout/Page.jsx";
import Header from "./Layout/Header/Header.jsx";
import Main from "./Layout/Main/Main.jsx";
import Footer from "./Layout/Footer/Footer.jsx";

class App extends Component {
    render() {
        return (
        <Page>
            <Header />
            <Main/>
            <Footer />
        </Page>);
    }
}

export default App;
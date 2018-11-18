import React, { Component, PureComponent }from "react";
import "../style.scss";

import Page from "./Layout/Page.jsx";
import Header from "./Layout/Header.jsx";
import Main from "./Layout/Main.jsx";
import Footer from "./Layout/Footer.jsx";

class App extends Component {
    render() {
        return (
        <Page>
            <Header />
            <Main />
            <Footer />
        </Page>);
    }
}

export default App;
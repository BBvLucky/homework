import React, { Component } from "react";
import "../../../../style.scss";

class Content extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="main-content-wrapper">{ children }</div>
        )
    }
}

export default Content;
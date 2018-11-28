import React, { Component } from "react";
import Comments from "../../Comments/Comments.jsx";
import Article from "../Article/Atricle.jsx";

class ArticlesFull extends Component {
    render() {
        const {
            match: {
                params: { articleId }
            }
        } = this.props;
        return (
            <div>
                <Article />
                <Comments />
                {`ID is ${articleId}`}
            </div>
        )
    }
}

export default ArticlesFull;
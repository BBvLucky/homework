import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../../../../style.scss";

class Article extends Component {
    render() {
        const { src, alt, caption, text, author, date } = this.props;
        return (
            <article className="main-article">
                <h3 className="main-article-caption">{ caption }</h3>
                <img src={src}  alt={alt} className="main-article-img"/>
                <p className="main-article-text">{text}</p>
                <Button variant="contained" color="primary" className="main-article-button">Read More</Button>
                <div className="main-article-info">
                    <h3 className="main-article-info-author">{ author }</h3>
                    <span className="main-article-info-date">{ date }</span>
                </div>
            </article>
        )
    }
}

export default Article;
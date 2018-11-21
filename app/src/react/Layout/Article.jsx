import React, { Component } from "react";
import "../../style.scss";

class Article extends Component {
    render() {
        return (
            <article className="main-article">
                <h3 className="main-article-caption">Caption</h3>
                <p className="main-article-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda alias exercitationem voluptatum numquam consequuntur nihil officia vitae? Hic sint asperiores molestias, repellat ab temporibus eius repudiandae natus nihil. Quo laborum tempore asperiores nobis ipsa totam neque doloremque rem recusandae fugiat. Mollitia exercitationem officia quae dolore inventore laborum dignissimos recusandae numquam labore aliquam ut eum autem architecto vero repellat sed dicta est, iste tenetur impedit itaque. Debitis iure voluptatem nihil.</p>
                <div className="main-article-info">
                    <h3 className="main-article-info-author">Irakliy</h3>
                    <span className="main-article-info-date">17.11.18 20:47<span id="published"></span></span>
                </div>
            </article>
        )
    }
}

export default Article;
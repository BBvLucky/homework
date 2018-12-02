import React, { Component } from "react";
import Comments from "../../Comments/Comments.jsx";
import Article from "../Article/Atricle.jsx";
import { connect } from "react-redux";
import { getArticlesList } from "../../../../../redux/modules/articles.js"

class ArticlesFull extends Component {
    render() {
        const {
            match: {
                params: { articleId }
            },
            articles
        } = this.props;
        return (
            <div>
                <Article
                    id={articleId}
                    caption={articles.caption}
                    src={articles.src}
                    alt={"article-img"}
                    text={articles.text}
                    author={articles.author}
                    date={articles.date}
                >
                </Article>
                <Comments />
                {`ID is ${articleId}`}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: getArticlesList(state, ownProps.id)
    }
}

export default connect(mapStateToProps)(ArticlesFull);
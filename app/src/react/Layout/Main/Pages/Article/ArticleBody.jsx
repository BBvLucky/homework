import React, { Component } from "react";
import { connect } from "react-redux";
import Chance from "chance";
import Button from "@material-ui/core/Button";
import Article from "./Atricle.jsx";
import moment from "moment";
import articleImg from "../../../../../assets/img.jpg";
// import { Link } from "react-router-dom";
import {
    getArticlesList,
    getArticlesLoading,
    fetchArticles,
    addArticle
} from "../../../../../redux/modules/articles.js";

import "../../../../../style.scss";

const chanceGenerator = new Chance();

class ArticleBody extends Component {
    state = {
        time: moment(),
        inputValue: ""
    };

    componentDidMount() {
        this.props.fetchArticles()
    };

    updateInputValue = event => {
        let updatedInput = "";
        if (event) {
            updatedInput = event.target.value;
        }

        this.setState({
            inputValue: updatedInput
        });
    };

    submitArticle = () => {
        const { inputValue } = this.state;

        if (inputValue.length === 0) {
            return;
        }

        const articleData = {
            id: chanceGenerator.string({
                pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            }),
            author: chanceGenerator.name({ nationality: "en" }),
            text: inputValue,
            caption: "Random caption"
        };

        this.props.addArticle(articleData).then(() => {
            this.setState({
                inputValue: ""
            });
        });
    };

    onEnter = event => {
        if (event.key === "Enter") {
            this.submitArticle();
        }
    };

    render() {
        const { time, inputValue } = this.state;
        const { articles, loading } = this.props;
        return (
            <section className="main-articles-wrapper">
                <div className="main-articles-submit">
                    <h3 className="main-articles-submit-caption">Add an article</h3>
                    <input
                        disabled={loading}
                        className="main-articles-submit-input"
                        value={inputValue}
                        onChange={this.updateInputValue}
                        onKeyPress={this.onEnter}
                    />
                    <Button onClick={this.submitArticle}>Submit</Button>
                </div>
                <div className="main-articles-container">
                    {articles.length > 0
                        ? articles.map(articles => (
                            <Article
                                key={articles.id}
                                id={articles.id}
                                caption={articles.caption}
                                src={articleImg}
                                alt={"article-img"}
                                text={articles.text}
                                author={articles.author}
                                date={time.format("DD.MM HH:mm")}
                            >
                            </Article>
                        ))
                        : "There are no stories yet! Wrote one!"}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: getArticlesList(state),
        loading: getArticlesLoading(state)
    };
};

const mapDispatchToProps = {
    fetchArticles,
    addArticle
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleBody);
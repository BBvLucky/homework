import React, { Component } from "react";
import Chance from "chance";
import Button from "@material-ui/core/Button";
import Article from "./Atricle.jsx";
import moment from "moment";
import articleImg from "../../../../assets/img.jpg";
import Comments from "../Comments/Comments.jsx";

import "../../../../style.scss";

const chanceGenerator = new Chance();

class ArticleBody extends Component {
    state = {
        time: moment(),
        inputValue: "",
        articles: [{
            key: "123",
            id: "123",
            caption: "asd",
            src: {articleImg},
            alt: "article-img",
            text: "adwad",
            author: "Frank",
        }]
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
        const { inputValue, articles } = this.state;

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

        const newArticlesArray = articles.slice();
        newArticlesArray.unshift(articleData);

        this.setState({
            inputValue: "",
            articles: newArticlesArray
        });
    };

    onEnter = event => {
        if (event.key === "Enter") {
            this.submitArticle();
        }
    };

    render() {
        const { time, articles, inputValue } = this.state;
        return (
            <section className="main-articles-wrapper">
                <div className="main-articles-submit">
                    <h3 className="main-articles-submit-caption">Add an article</h3>
                    <input className="main-articles-submit-input"
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
                        : "There are not stories yet! Wrote one!"}
                </div>
            </section>
        )
    }
}

export default ArticleBody;
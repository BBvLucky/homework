import React, { PureComponent } from "react";

import Home from "../Home/Home.jsx";
import ArticleBody from "../Article/ArticleBody.jsx";
import Comments from "../Comments/Comments.jsx";
import Users from "../Users/Users.jsx";

import "../../../../style.scss";
import { element } from "prop-types";

const PAGES = {
  HOME: 0,
  ARTICLES: 1,
  COMMENTS: 2,
  USERS: 3
};

class NavTest extends PureComponent {
  state = {
    page: PAGES.ARTICLES
  };

  changePage = page => {
    this.setState({
      page
    });
  };

  renderPage() {
    const { page } = this.state;

    switch (page) {
      case PAGES.HOME:
        return <Home />;
      case PAGES.ARTICLES:
        return <ArticleBody />;
      case PAGES.COMMENTS:
        return <Comments />;
      case PAGES.USERS:
        return <Users />;
      default:
        return "Not found page";
    }
  }

  render() {
    return (
      <div className="main-content-wrapper">
        <div className="navigation">
          <a href="#"
            onClick={() => {
              this.changePage(PAGES.HOME);
            }}
            className="link"
          >
            Home
          </a>
          <a href="#"
            onClick={() => {
              this.changePage(PAGES.ARTICLES);
            }}
            className="link"
          >
            Articles
          </a>
          <a href="#"
            onClick={() => {
              this.changePage(PAGES.COMMENTS);
            }}
            className="link"
          >
            Comments
          </a>
          <a href="#"
            onClick={() => {
              this.changePage(PAGES.USERS);
            }}
            className="link"
          >
            Users
          </a>
        </div>
        <div className="page-content">{this.renderPage()}</div>
      </div>
    );
  }
}

export default NavTest;
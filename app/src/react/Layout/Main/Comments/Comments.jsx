import React, { PureComponent } from "react";
import Chance from "chance";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Comment from "./Comment.jsx";

import "../../../../style.scss";

const chanceGenerator = new Chance();

class Comments extends PureComponent {
  state = {
    inputValue: "",
    time: moment(),
    comments: sessionStorage.getItem("user-comments")
    ? JSON.parse(sessionStorage.getItem("user-comments"))
    : []
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

  submitComment = () => {
    const { inputValue, comments, time } = this.state;

    if (inputValue.length === 0) {
      return;
    }

    const commentData = {
      id: chanceGenerator.string({
        pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      }),
      person: chanceGenerator.name({ nationality: "en" }),
      text: inputValue
    };

    const newCommentsArray = comments.slice();
    newCommentsArray.unshift(commentData);

    this.setState({
      inputValue: "",
      comments: newCommentsArray
    });
    sessionStorage.setItem("user-comments", JSON.stringify(newCommentsArray));
  };

  onEnter = event => {
    if (event.key === "Enter") {
      this.submitComment();
    }
  };

  render() {
    const { comments, inputValue, time } = this.state;
    return (
      <div className="comments">
        <div className="comments-submit">
          <h3 className="comments-submit-caption">Add a comment</h3>
          <input
            value={inputValue}
            onChange={this.updateInputValue}
            onKeyPress={this.onEnter}
            className="comments-submit-input"
          />
          <Button onClick={this.submitComment}>Submit</Button>
        </div>
        <div className="comments-container">
          {comments.length > 0
            ? comments.map(comment => (
              <Comment
                key={comment.id}
                href={this.props.id}
                person={comment.person}
                text={comment.text}
                date={time.format("DD.MM HH:mm")}
              />
            ))
            : "There are no comments yet. Be first!"}
        </div>
      </div>
    );
  }
}

export default Comments;

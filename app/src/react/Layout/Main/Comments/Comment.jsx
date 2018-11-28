import React, { PureComponent } from "react";
import "../../../../style.scss";

const Comment = props => (
  <a href={`#${props.href}`} className="comment">
    <span className="comment-person">{`${props.person}:`}</span>
    <span className="comment-text">{props.text}</span>
    <span className="comment-date">{props.date}</span>
  </a>
);

export default Comment;

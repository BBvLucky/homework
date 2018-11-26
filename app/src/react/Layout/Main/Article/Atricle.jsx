import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import Comments from "../Comments/Comments.jsx";

import "../../../../style.scss";

const Article = props => (
   <article className="main-article" id={props.id}>
   <h3 className="main-article-caption">{ props.caption }</h3>
   <div className="main-article-info">
       <span className="main-article-info-author">{ props.author }</span>
       <span className="main-article-info-date">{ props.date }</span>
   </div>
   <img src={props.src}  alt={props.alt} className="main-article-img"/>
   <p className="main-article-text">{props.text}</p>
   <Button variant="contained" color="primary" className="main-article-button">Read More</Button>
   <div className="main-article-comments">
        <Comments id={props.id}/>
   </div>
</article>
);

export default Article;
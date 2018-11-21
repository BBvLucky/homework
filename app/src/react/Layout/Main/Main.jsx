import React, { Component } from "react";
import Content from "./Content/Content.jsx";
import Article from "./Article/Article.jsx";
import articleImg from "../../../assets/img.jpg";
import Aside from "./Aside/Aside.jsx";

import "../../../style.scss";


class Main extends Component {
    render() {
        return (
            <section className="main">
                <Content>
                    <Article
                        src={articleImg}
                        alt={"article-img"}
                        caption={"Caption"}
                        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda." }
                        author={"Irakliy"}
                        date={"20.11.2018 20:57"}
                    />
                    <Article
                        src={articleImg}
                        alt={"article-img"}
                        caption={"Some new caption"}
                        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda."}
                        author={"Some Guy"}
                        date={"20.11.2018 20:58"}
                    />
                    <Article
                        src={articleImg}
                        alt={"article-img"}
                        caption={"All new caption"}
                        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda."}
                        author={"Lucy Skyrunner"}
                        date={"20.11.2018 21:38"}
                    />
                    <Article
                        src={articleImg}
                        alt={"article-img"}
                        caption={"Completly new caption"}
                        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda."}
                        author={"Marty McFly"}
                        date={"20.11.2018 23:55"}
                    />
                    <Article
                        src={articleImg}
                        alt={"article-img"}
                        caption={"The new caption"}
                        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus repellat natus vitae harum a nam? Quia libero atque architecto. Natus cupiditate quibusdam nemo nihil. Voluptas ducimus aliquid maxime assumenda."}
                        author={"Petter Griffin"}
                        date={"21.11.2018 21:06"}
                    />
                </Content>
                <Aside />
            </section>
        )
    }
}

export default Main;
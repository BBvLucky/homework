const moment = require("moment");

module.exports = (app, db) => {
    app.get("/articles", (req, res) => {
        db.collection("articles").find({}).toArray(
            (err, result) => {
                if (err) {
                    res.status(500).send({error: "ups! Something wrong!"})
                } else {
                    res.send(result.map(article => ({
                        ...article,
                        id: article._id
                    })))
                }
            }
        )
    })

    app.get("/articles/:articleId", (req, res) => {
        const id = req.params.articleId;
        res.send(id);
    })

    app.post("/add_article", (req, res) => {
        console.log("article.req.body", req.body);

        const { text, author, caption } = req.body;

        if (text && author && caption) {
            const article = {
                text,
                author,
                caption,
                addedDate: moment.utc().toDate()
            }

            db.collection("articles").insertOne(article, (err,result) => {
                if (err) {
                    res.status(500).semd({ error: "there is another problem"})
                } else {
                    res.send({
                        ...result.ops[0],
                        id: result.ops[0]._id
                    })
                }
            })
        } else {
            res.status(400).send("yet, it's another problem")
        }
    })
}
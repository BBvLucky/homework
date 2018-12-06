const moment = require("moment");

module.exports = (app, db) => {
    app.get("/comments", (req, res) => {
        db.collection("comments").find({}).toArray((err, result) => {
            if (err) {
                res.status(500).send({error: "Error, ups"});
            } else {
                res.send(result.map(comment => ({
                    ...comment,
                    id: comment._id
                })))
            }
        });
    });
    app.get("/comments/:commentId", (req, res) => {
        const id = req.params.commentId;
    
        res.send(id);
      });

    app.post("/add_comment", (req, res) => {
        console.log("req.body", req.body);

        const { text, person } = req.body;

        if (text && person) {
            const comment = {
                text,
                person,
                addedDate: moment.utc().toDate()
            };

            db.collection("comments").insertOne(comment, (err, result) => {
                if (err) {
                    res.status(500).send({ error: "nu bivaet, cho" })
                } else {
                    res.send({
                        ...result.ops[0],
                        id: result.ops[0]._id
                    });
                }
            });
        } else {
            res.status(400).send("Sorry, not working")
        }
    });
};
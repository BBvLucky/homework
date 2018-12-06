const commentsRoutes = require("./comments.js");
const articlesRoutes = require("./articles.js");

module.exports = (app, db) => {
    app.get("/", (req, res) => {
        res.send("Hi there!")
    });

    commentsRoutes(app, db);
    articlesRoutes(app, db);
};
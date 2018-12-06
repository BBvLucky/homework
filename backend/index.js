const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();

const dbConfig = require('./config/db')
const routes = require("./routes");

const DEFAULT_PORT = 9001;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

MongoClient.connect(
    dbConfig.url,
    {
    useNewUrlParser: true
    },
    (err, databaseInstanse) => {
    if (err) return console.log(err);

    routes(app, databaseInstanse.db());
    app.listen(PORT, () => {
        console.log(`I'm alive!`)
    })
}
);
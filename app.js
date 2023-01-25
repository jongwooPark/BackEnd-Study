const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const home = require('./src/routes/home');

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use( express.static(__dirname + "/src/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
console.log('__dirname' + __dirname)

app.use('/', home);


module.exports = app;


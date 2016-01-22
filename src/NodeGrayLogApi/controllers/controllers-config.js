"user strict"
var GraylogController = require("./routes/graylog.js");

var controllers = {
    graylogController: new GraylogController()
};

module.exports = controllers;
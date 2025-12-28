"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var book_route_1 = require("./routes/book.route");
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send("hello world");
});
app.use('/api/books', book_route_1.default);
app.listen(port, function () {
    console.log("Listening on localhost:".concat(port));
});
exports.default = app;

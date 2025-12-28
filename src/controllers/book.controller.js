"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var book_dto_1 = require("../dtos/book.dto");
var book_service_1 = require("../services/book.service");
var bookService = new book_service_1.BookService();
var BookController = /** @class */ (function () {
    function BookController() {
        this.createBook = function (req, res) {
            var _a;
            try {
                var validation = book_dto_1.CreateBookDTO.safeParse(req.body);
                if (!validation.success) {
                    return res.status(400).json({ errors: validation.error });
                }
                var _b = validation.data, id = _b.id, title = _b.title;
                var newBook = bookService.createBook({ id: id, title: title });
                return res.status(201).json(newBook);
            }
            catch (error) {
                return res.status(400).send((_a = error.message) !== null && _a !== void 0 ? _a : "Something went wrong");
            }
        };
        this.getBooks = function (req, res) {
            var return_book = bookService.getAllBooks();
            return res.json(return_book);
        };
        this.getBookById = function (req, res) {
            var _a;
            try {
                var bookid = req.params.bookid;
                var book = bookService.getBookById(bookid);
                return res.status(201).json(book);
            }
            catch (error) {
                return res.status(400).send((_a = error.message) !== null && _a !== void 0 ? _a : "Something went wrong");
            }
        };
    }
    return BookController;
}());
exports.BookController = BookController;

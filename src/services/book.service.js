"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
var book_repository_1 = require("../repositories/book.repository");
var bookrepository = new book_repository_1.BookRepository();
var BookService = /** @class */ (function () {
    function BookService() {
    }
    BookService.prototype.getAllBooks = function () {
        var response = bookrepository.getAllBooks().map(function (book) {
            return __assign(__assign({}, book), { title: book.title.toUpperCase() });
        });
        return response;
    };
    BookService.prototype.createBook = function (bookDTO) {
        var _a;
        var newBook = {
            id: bookDTO.id,
            title: bookDTO.title,
        };
        var existingBook = (_a = bookrepository.getBookById) === null || _a === void 0 ? void 0 : _a.call(bookrepository, newBook.id);
        if (existingBook) {
            throw new Error("".concat(newBook.id, " already exists"));
        }
        return bookrepository.createBook(newBook);
    };
    BookService.prototype.getBookById = function (id) {
        var _a;
        var book = (_a = bookrepository.getBookById) === null || _a === void 0 ? void 0 : _a.call(bookrepository, id);
        if (!book) {
            throw new Error("Book not found");
        }
        return __assign(__assign({}, book), { title: book.title.toUpperCase() });
    };
    return BookService;
}());
exports.BookService = BookService;

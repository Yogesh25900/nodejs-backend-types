"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = exports.books = void 0;
exports.books = [
    { id: "1", title: "Book One" },
    { id: "2", title: "Book Two" },
    { id: "3", title: "Book Three", date: "2024-06-01" },
];
var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.createBook = function (book) {
        exports.books.push(book);
        return book;
    };
    BookRepository.prototype.getAllBooks = function () {
        return exports.books;
    };
    BookRepository.prototype.getBookById = function (id) {
        return exports.books.find(function (book) { return book.id === id; });
    };
    return BookRepository;
}());
exports.BookRepository = BookRepository;

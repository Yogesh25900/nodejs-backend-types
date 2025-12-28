"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDTO = void 0;
var book_type_1 = require("../types/book.type");
exports.CreateBookDTO = book_type_1.BookSchema.pick({
    id: true,
    title: true
});

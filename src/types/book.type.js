"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var zod_1 = require("zod");
exports.BookSchema = zod_1.default.object({
    id: zod_1.default.string().min(1, { message: "ID is required" }),
    title: zod_1.default.string().min(1, { message: "Title is required" }),
    date: zod_1.default.string().optional(),
});

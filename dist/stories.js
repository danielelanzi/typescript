"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imporare tutto
var books = __importStar(require("./modules/book"));
console.log(books);
var book = new books.Book();
book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';
console.log(book);
//importare alcune cose
var book_1 = require("./modules/book");
var book = new book_1.Book();
book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';
console.log(book);
console.log(book_1.Categories);
//Import default alias dell'export default
var book_2 = __importDefault(require("./modules/book"));
var book = new book_2.default();
book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';
console.log(book);

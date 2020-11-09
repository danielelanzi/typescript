//imporare tutto
import * as books from './modules/book'
console.log(books);

let book = new books.Book();

book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';
console.log(book);

//importare alcune cose
import {Book, Categories} from './modules/book'

let book = new Book();

book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';

console.log(book);

console.log(Categories);

//Import default alias dell'export default
import MyBookClass from './modules/book'

let book = new MyBookClass();

book.year = 2018;
book.title = ' La mia storia';
book.content = ' lorem ipsuim docet';
console.log(book);


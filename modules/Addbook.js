import {
  bookTitle, authorName, errorMsg, displayDiv,
} from './field-data.js';
import Object from './object.js';
import Display from './display.js';

class Addbook {
  addBook = () => {
    let books = [];
    let contentDiv;
    const title = bookTitle.value;
    const author = authorName.value;

    /* setting object data */
    const book = new Object(title, author);
    const displayBooks = new Display();

    /* store in localstorage */
    if (bookTitle.value === '' || authorName.value === '') {
      errorMsg.innerText = 'please enter data';
    } else if (localStorage.getItem('booksInfo') === null) {
      books.push(book);
      localStorage.setItem('booksInfo', JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem('booksInfo'));
      books.push(book);
      localStorage.setItem('booksInfo', JSON.stringify(books));
    }

    /* Display */
    contentDiv = '';
    bookTitle.value = '';
    authorName.value = '';
    displayDiv.innerHTML = contentDiv;
    displayBooks.display();
  };
}

export default Addbook;

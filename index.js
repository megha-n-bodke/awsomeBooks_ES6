import {
  booklink,
  contactLink,
  formlink,
  submitbtn,
} from "./modules/field-data.js";
import Addbook from "./modules/Addbook.js";
import Display from "./modules/display.js";

document.addEventListener("DOMContentLoaded", () => {
  submitbtn.addEventListener("click", () => {
    const addBooks = new Addbook();
    addBooks.addBook();
  });

  const displayBook = new Display();
  displayBook.display();

  booklink.addEventListener("click", () => {
    const book = new SingleBook();
    book.displayBooks();
  });

  formlink.addEventListener("click", () => {
    const book = new SingleBook();
    book.displayForm();
  });

  contactLink.addEventListener("click", () => {
    const book = new SingleBook();
    book.displayContact();
  });
});

/* console.log(Object);
alert(title);
 */

/* 
1. get elements file (DOM elements
2.class file
)*/

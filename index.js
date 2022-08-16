import {
  booklink,
  contactLink,
  formlink,
  submitbtn,
} from './modules/field-data.js';
import Addbook from './modules/Addbook.js';
import Display from './modules/display.js';
import Navigation from './modules/navigation.js';
import Displaytime from './modules/displayTime.js';

document.addEventListener('DOMContentLoaded', () => {
  booklink.style.color = 'blue';
  const dtime = new Displaytime();
  dtime.getTimeData();

  submitbtn.addEventListener('click', () => {
    const addBooks = new Addbook();
    addBooks.addBook();
  });

  const displayBook = new Display();
  displayBook.display();

  booklink.addEventListener('click', () => {
    const book = new Navigation();
    book.displayBooks();
  });

  formlink.addEventListener('click', () => {
    const book = new Navigation();
    book.displayForm();
  });

  contactLink.addEventListener('click', () => {
    const book = new Navigation();
    book.displayContact();
  });
});

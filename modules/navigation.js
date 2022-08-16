import {
  booklink,
  booksDetails,
  contact,
  contactLink,
  form,
  formlink,
} from './field-data.js';

class Navigation {
  displayBooks() {
    booksDetails.classList.add('show-books');
    booksDetails.classList.remove('remove-books');
    form.classList.remove('show-form');
    contact.classList.remove('show-contact');
    booklink.style.color = 'blue';
    formlink.style.color = 'black';
    contactLink.style.color = 'black';
  }

  displayForm() {
    booksDetails.classList.remove('show-books');
    booksDetails.classList.add('remove-books');
    form.classList.add('show-form');
    contact.classList.remove('show-contact');
    booklink.style.color = 'black';
    formlink.style.color = 'blue';
    contactLink.style.color = 'black';
  }

  displayContact() {
    booksDetails.classList.remove('show-books');
    booksDetails.classList.add('remove-books');
    form.classList.remove('show-form');
    contact.classList.add('show-contact');
    booklink.style.color = 'black';
    formlink.style.color = 'black';
    contactLink.style.color = 'blue';
  }
}

export default Navigation;

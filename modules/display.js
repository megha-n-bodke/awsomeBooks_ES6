import { bookTitle, authorName, submitbtn } from "./field-data.js";

submitbtn.addEventListener("click", () => {
  alert("btn clicked");
  console.log(bookTitle.value);
  console.log(authorName.value);
});
export let msg = "Hello";

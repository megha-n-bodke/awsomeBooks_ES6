import { msg } from "./modules/display.js";
import Object from "./modules/object.js";
import { bookTitle, authorName, submitbtn } from "./modules/field-data.js";

submitbtn.addEventListener("click", () => {
  alert("btn clicked");
  console.log(bookTitle.value);
  console.log(authorName.value);
});

/* console.log(Object);
alert(title);
 */

/* 
1. get elements file (DOM elements
2.class file
)*/

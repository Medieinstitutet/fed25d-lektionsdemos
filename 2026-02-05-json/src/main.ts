import './style.css';
import categories from './categories.json';

console.log(categories.expenses[0].text); // JSON = JS Object Notation

const catDropdown = document.querySelector('#categoryDropdown');
if (catDropdown) {
  categories.expenses.forEach((category) => {
    catDropdown.innerHTML += `<option value="${category.value}">${category.text}</option>`
  });
}

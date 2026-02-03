// @ts-nocheck
const registerBtn = document.querySelector('#register');
registerBtn.addEventListener('click', registerExpense);

function registerExpense(e) {
  e.preventDefault();

  console.log('registrera belopp och text i en array');
}
import './style.scss';

/**
 * 📚 Lästips kring formulär, tillgänglighet & design
 * - https://www.nngroup.com/articles/errors-forms-design-guidelines/
 * - https://www.smashingmagazine.com/2022/08/error-messages-ux-design/
 * - https://www.inclusion.hsbc.com/en/articles/common-mistakes/error-messages-in-forms
 **/

const firstNameRegEx = /^(?=.{2,50}$)[A-ZÀ-ÿ][a-zà-ÿ]+(?:[ '-][A-ZÀ-ÿ][a-zà-ÿ]+)*$/; // TODO: förbättringspotential, nu krävs t.ex. stor bokstav
const firstName = document.querySelector('#firstname');
// Använd något av följande: change, focusout eller blur
firstName.addEventListener('focusout', validateFirstNameField);

function validateFirstNameField() {
  const inputFieldValue = firstName.value;
  const isValidFirstName = firstNameRegEx.test(inputFieldValue);

  if(isValidFirstName) {
    firstName.nextElementSibling.classList.add('hidden');
  } else {
    firstName.nextElementSibling.classList.remove('hidden');
  }

  return isValidFirstName;
}

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailField = document.querySelector('#email');
// Använd något av följande: change, focusout eller blur
emailField.addEventListener('focusout', validateEmailField);

function validateEmailField() {
  const inputFieldValue = emailField.value;
  const isValidEmail = emailRegEx.test(inputFieldValue);

  if(isValidEmail) {
    emailField.nextElementSibling.classList.add('hidden');
  } else {
    emailField.nextElementSibling.classList.remove('hidden');
  }

  return isValidEmail; // true eller false
}

const orderBtn = document.querySelector('orderBtn');

function toggleOrderButtonActive() {
  orderBtn.setAttribute('disabled', 'disabled');

  const isValidFirstName = validateFirstNameField();
  if (!isValidFirstName) {
    return;
  }

  const isValidEmail = validateEmailField(); // true eller false
  if (!isValidEmail) {
    return;
  }

  orderBtn.removeAttribute('disabled');

}
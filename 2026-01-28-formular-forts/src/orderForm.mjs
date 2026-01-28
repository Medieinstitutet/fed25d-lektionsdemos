// Grupperar man per "typ" => alla regex på samma ställe
// gruppera per funktion => knapp + knappens eventlyssnare + knappens funktion


// ██████████████████████████████████████████████████████
// ███████████████████████████ ☑️ REGEX █████████████████
// ██████████████████████████████████████████████████████
const firstNameRegEx = /^(?:[\p{L}]{1,3}\. )?(?!.*--)(?=.*[\p{L}].*[\p{L}])[\p{L}]+(?:[ -][p{L}]+)*$/ui;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ██████████████████████████████████████████████████████
// ███████████████████████████ 🔤 INPUTS ████████████████
// ██████████████████████████████████████████████████████
const orderForm = document.querySelector('#orderForm');
const firstName = document.querySelector('#firstname');
const emailField = document.querySelector('#email');
const orderBtn = document.querySelector('#orderBtn');

// ██████████████████████████████████████████████████████
// ███████████████████████████ ⚡️ EVENT LISTENERS ███████
// ██████████████████████████████████████████████████████
firstName.addEventListener('focusout', validateFirstNameField);
emailField.addEventListener('focusout', validateEmailField);

// ██████████████████████████████████████████████████████
// ███████████████████████████ ⚙️ FUNCTIONS █████████████
// ██████████████████████████████████████████████████████
/**
 * Validate the first name field
 * @returns {boolean} Validity of first name
 */
function validateFirstNameField() {
  const inputFieldValue = firstName.value;

  if(inputFieldValue.length === 0) {
    return;
  }

  const isValidFirstName = firstNameRegEx.test(inputFieldValue);

  if(isValidFirstName) {
    firstName.nextElementSibling.classList.add('hidden');
  } else {
    firstName.nextElementSibling.classList.remove('hidden');
  }

  return isValidFirstName;
}

/**
 * Validate the email field
 * @returns {boolean} Validity of email
 */
function validateEmailField() {
  const inputFieldValue = emailField.value;

  if (inputFieldValue.length === 0) {
    return;
  }

  const isValidEmail = emailRegEx.test(inputFieldValue);

  if(isValidEmail) {
    emailField.nextElementSibling.classList.add('hidden');
  } else {
    emailField.nextElementSibling.classList.remove('hidden');
  }

  return isValidEmail;
}

/**
 * Check if all form fields are properly filled.
 */
function checkFormFieldsValidity() {
  orderBtn.setAttribute('disabled', '');

  const firstNameOk = validateFirstNameField(); // const firstNameOk = true;
  const emailOk = validateEmailField();

  if (!firstNameOk) {
    // Konceptnamn: "return early" => avbryt koden så fort något villkor inte uppfylls
    return;
  }

  if (!emailOk) {
    return;
  }

  // Spaghetti-kod eller djupt nästlad kod = INTE BRA
  /*if (firstNameOk) {
    if (emailOk) {
      if (lastNameOk) {
        if (addressOk) {
          // …
        }
      }
    }
  }*/

  orderBtn.removeAttribute('disabled');
}

// ██████████████████████████████████████████████████████
// ███████████████████████████ 🎉 INIT FORM █████████████
// ██████████████████████████████████████████████████████
export function initForm() {
  // Jämför med "input" som event-typ
  orderForm.addEventListener('focusout', checkFormFieldsValidity);
}
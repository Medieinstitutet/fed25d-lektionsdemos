const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailField = document.querySelector('#email');
emailField.addEventListener('focusout', validateEmailField);

/**
 * Validate the email field
 * @returns {boolean} Validity of email
 */
export function validateEmailField() {
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
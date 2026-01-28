const firstNameRegEx = /^(?:[\p{L}]{1,3}\. )?(?!.*--)(?=.*[\p{L}].*[\p{L}])[\p{L}]+(?:[ -][p{L}]+)*$/ui;

const firstName = document.querySelector('#firstname');
firstName.addEventListener('focusout', validateFirstNameField);

/**
 * Validate the first name field
 * @returns {boolean} Validity of first name
 */
export function validateFirstNameField() {
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
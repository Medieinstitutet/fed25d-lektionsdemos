// Grupperar man per "typ" => alla regex på samma ställe
// gruppera per funktion => knapp + knappens eventlyssnare + knappens funktion
import { validateFirstNameField } from "./orderForm/firstNameField.mjs";
import { validateEmailField } from "./orderForm/emailField.mjs";

// ██████████████████████████████████████████████████████
// ███████████████████████████ 🔤 INPUTS ████████████████
// ██████████████████████████████████████████████████████
const orderForm = document.querySelector('#orderForm');
const orderBtn = document.querySelector('#orderBtn');

// ██████████████████████████████████████████████████████
// ███████████████████████████ ⚙️ FUNCTIONS █████████████
// ██████████████████████████████████████████████████████

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
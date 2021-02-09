/*When the input values change, validate the values and enable the button if 
all values are valid.

Once the form is submitted display a message to the user that form was submitted.*/


const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function validateForm() {
    if (checkLength(firstName.value, 0) && checkLength(lastName.value, 3) && validateEmail(email.value))  {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

firstName.addEventListener("keyup", validateForm);
lastName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);

function submitForm(event) {
    event.preventDefault();
    message.innerHTML = `<div class="message">Your message has been sent</div>`;
    form.reset();
}

form.addEventListener("submit", submitForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
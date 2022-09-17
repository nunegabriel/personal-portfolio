const form = document.getElementById('form');
const email = document.getElementById('contact-email');
const userName = document.getElementById('contact-name');
const message = document.getElementById('form-message');
const error = document.getElementById('error-message');

error.style.visibility = 'hidden';

function formValidate(e) {
  if (email.value !== email.value.toLowerCase()) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please enter your email address in Lowercase.';
    e.preventDefault();
  } else {
    error.style.visibility = 'hidden';
  }
}

form.addEventListener('submit', formValidate);

function storeInput() {
  const user = {
    UserEmail: email.value,
    UserName: userName.value,
    UserText: message.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

userName.addEventListener('focusout', storeInput);
email.addEventListener('focusout', storeInput);
message.addEventListener('focusout', storeInput);

const data = JSON.parse(localStorage.getItem('user'));

if (data) {
  userName.value = data.UserName;
  email.value = data.UserEmail;
  message.value = data.UserText;
}
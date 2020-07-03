const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

function showError(input, message) {
  const formConrtol = input.parentElement;
  formConrtol.className = 'form-control error';
  const small = formConrtol.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formConrtol = input.parentElement;
  formConrtol.className = 'form-control success';

}

//event listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (confirmPassword.value === '') {
    showError(confirmPassword, 'Confirm password did not match');
  } else {
    showSuccess(confirmPassword);
  }
});
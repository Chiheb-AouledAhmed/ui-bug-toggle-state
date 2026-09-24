const form = document.getElementById('signup-form');
const success = document.getElementById('success-msg');
const error = document.getElementById('error-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email.includes('already')) {
    error.classList.add('is-visible');
  } else {
    success.classList.add('is-visible');
  }
});

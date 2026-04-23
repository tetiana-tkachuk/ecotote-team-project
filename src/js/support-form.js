// const form = document.querySelector('.support-form');
// const requiredInputs = form.querySelectorAll('[required]');
// const submitButton = form.querySelector('.support-button');

// function checkFormValidity() {
//   const allValid = Array.from(requiredInputs).every(input =>
//     input.checkValidity()
//   );
//   submitButton.disabled = !allValid;
// }

// requiredInputs.forEach(input => {
//   input.addEventListener('input', checkFormValidity);
// });

// checkFormValidity();

const form = document.querySelector('.support-form');
const requiredInputs = form.querySelectorAll('[required]');
const submitButton = form.querySelector('.support-button');

const modal = document.getElementById('success-modal');
const modalClose = modal.querySelector('.modal-close');

function checkFormValidity() {
  submitButton.disabled = !form.checkValidity();
}

form.addEventListener('input', checkFormValidity);

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!form.checkValidity()) return;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  form.reset();
  checkFormValidity();
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

checkFormValidity();

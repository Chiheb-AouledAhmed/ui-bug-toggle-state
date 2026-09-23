document.querySelectorAll('.toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOn = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!isOn));
  });
});

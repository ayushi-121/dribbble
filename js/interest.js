const options = document.querySelectorAll('.option input[type="radio"]');

options.forEach(option => {
  option.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value);
    }
  });
});

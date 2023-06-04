const inputField = document.getElementById('destination');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = dropdownMenu.querySelectorAll('li');

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    inputField.value = item.innerText;
    dropdownMenu.style.display = 'none';
  });
});

document.addEventListener('click', event => {
  if (!event.target.matches('#destination')) {
    dropdownMenu.style.display = 'none';
  }
});

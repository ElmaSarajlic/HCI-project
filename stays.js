const sortByText = document.querySelector('.sort-by');
const dropdownMenu = document.querySelector('.dropdown-menu');

sortByText.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', event => {
  if (!event.target.matches('.sort-by') && !event.target.matches('.dropdown-menu')) {
    dropdownMenu.style.display = 'none';
  }
});

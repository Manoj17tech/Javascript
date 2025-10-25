const searchInput = document.querySelector('#search');
const nameElements = document.querySelectorAll('.name');

// Convert NodeList to Array using map
const names = [...nameElements].map(el => ({
  element: el,
  text: el.textContent.toLowerCase()
}));

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  names.forEach(({ element, text }) => {
    if (text.includes(searchTerm) && searchTerm !== "") {
      element.classList.add('highlight');
    } else {
      element.classList.remove('highlight');
    }
  });
});



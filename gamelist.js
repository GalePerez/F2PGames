
const genres = ['action', 'adventure', 'fps-shooter', 'fighting',
  'strategy', 'sports', 'role-playing', 'puzzle', 'simulator', 'survival'];

  

for (let i=0; i < genres.length; i++) {
  const genreList = document.getElementById('genre-list');
  const buttonGenre = document.createElement('button');
  buttonGenre.classList.add('btn', 'btn-primary');
  genreList.appendChild(buttonGenre);
  buttonGenre.textContent = genres[i];
};

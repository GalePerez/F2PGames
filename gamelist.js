//genre-list button
const genres = ['action', 'adventure', 'fps-shooter', 'fighting',
  'strategy', 'sports', 'role-playing', 'puzzle', 'simulator', 'survival'];

  

for (let i=0; i < genres.length; i++) {
  const genreList = document.getElementById('genre-list');
  const buttonGenre = document.createElement('button');
  buttonGenre.classList.add('btn', 'btn-primary');
  genreList.appendChild(buttonGenre);
  buttonGenre.textContent = genres[i];
};

// game content

// const gameContainer = document.createElement('div');
// gameContainer.setAttribute('id', 'all-games')
// const allGames = getElementById('all-games')

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ca2ec8f4dmsh51d5ffeca17b406p156ec8jsnca55603af315',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch (url,options) 
  .then((res) => res.json())
  .then(data => {
    data.forEach(element => {
      const allIcon = document.getElementById('all-icons')
      const iconContainer = document.createElement('div')
      iconContainer.classList.add('card');
      const cardImage = document.createElement('img');
      cardImage.classList.add('card-img');
      cardImage.setAttribute('src',`${element.thumbnail}`);

      allIcon.appendChild(iconContainer);
      iconContainer.appendChild(cardImage);
    });
  })
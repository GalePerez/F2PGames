
//genre dropdown 

// const genDrop = document.getElementById('genre-dropdown')
// const titleElement = document.createElement('h1');
// titleElement.classList.add('text-light');
// const genContainer = document.createElement('div');
// genContainer.classList.add('text-light');
// const labelElement = document.createElement('label');
// labelElement.setAttribute('for', 'genre');
// labelElement.textContent = 'Genres: ';
// const selectElement = document.createElement('select');
// selectElement.setAttribute('id', 'genre');
// selectElement.setAttribute('name', 'genre');

// //Append Elements
// genDrop.appendChild(titleElement);
// genDrop.appendChild(genContainer);
// genContainer.appendChild(labelElement);
// genContainer.appendChild(selectElement);

// for (let gen=0; gen < genres.length; gen++) {

//     const optionElement = document.createElement('option');
//     optionElement.textContent = genres[gen];
//     optionElement.setAttribute('value', genres[gen])
//     selectElement.appendChild(optionElement);  
// }

// game content

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
  });

  // filter by genre

const mmoGenre = () => {
  fetch(url,options)
    .then((res) => res.json())
    .then(data => {
      data.forEach(element => {
        if (element.genre === 'MMO') {
          const allIcon = document.getElementById('all-icons');
          allIcon.classList.add('d-none');
          const rpgIcons = document.getElementById('mmorpg-list');
          rpgIcons.classList.add('d-none');
          const shooterIcon = document.getElementById('shooter-list');
          shooterIcon.classList.add('d-none');
          const stratIcon = document.getElementById('strategy-list');
          stratIcon.classList.add('d-none');
          const mobaIcon = document.getElementById('moba-list');
          mobaIcon.classList.add('d-none');
          const raceIcon = document.getElementById('racing-list');
          raceIcon.classList.add('d-none');
          const sportsIcon = document.getElementById('sports-list');
          sportsIcon.classList.add('d-none');
          const socialIcon = document.getElementById('social-list');
          socialIcon.classList.add('d-none');
          const fightIcon = document.getElementById('fighting-list');
          fightIcon.classList.add('d-none');
          const cardGameIcon = document.getElementById('cardgame-list');
          cardGameIcon.classList.add('d-none');


          const mmoList = document.getElementById('mmo-list')
          const mmoDiv = document.createElement('div');
          mmoDiv.classList.add('mmo-card')
          mmoDiv.classList.add('card');
          const mmoImage = document.createElement('img');
          mmoImage.classList.add('card-img')
          mmoImage.setAttribute('src', `${element.thumbnail}`)
          
          mmoList.appendChild(mmoDiv);
          mmoDiv.appendChild(mmoImage);
          
        }
      })
    })
}





const genres = ['MMO', 'MMORPG', 'Shooter', 'Strategy', 'MOBA',
  'Racing' ,'Sports', 'Social', 'Fighting', 'Cardgames'];



for (let i=0; i < genres.length; i++) {

  const genreList = document.getElementById('genre-list');
  const buttonGenre = document.createElement('button');
  buttonGenre.classList.add('btn', 'btn-primary');  
  genreList.appendChild(buttonGenre);
  buttonGenre.textContent = genres[i]; 
  buttonGenre.onclick = mmoGenre
  

};


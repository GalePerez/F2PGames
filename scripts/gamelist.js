
const dropContainer = document.getElementById('genre-dropdown');
const dropDown = document.createElement('div');
dropDown.innerHTML = `
    <div class="dropdown">
      <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Genre
      </button>
      <ul class="dropdown-menu">

        <li><a class="dropdown-item" href="#">MMO</a></li>
        <li><a class="dropdown-item" href="#">MMORPG</a></li>
        <li><a class="dropdown-item" href="#">Shooter</a></li>
        <li><a class="dropdown-item" href="#">Strategy</a></li>
        <li><a class="dropdown-item" href="#">MOBA</a></li>
        <li><a class="dropdown-item" href="#">Racing</a></li>
        <li><a class="dropdown-item" href="#">Sports</a></li>
        <li><a class="dropdown-item" href="#">Social</a></li>\
        <li><a class="dropdown-item" href="#">Fighting</a></li>
        <li><a class="dropdown-item" href="#">Cardgames</a></li>
  
      </ul>
    </div>`;

    dropContainer.appendChild(dropDown);
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

const rpgGenre = () => {
  fetch(url,options)
    .then((res) => res.json())
    .then(data => {
      data.forEach(element => {
        if (element.genre === 'MMORPG') {
          const allIcon = document.getElementById('all-icons');
          allIcon.classList.add('d-none');
          const mmoIcons = document.getElementById('mmo-list');
          mmoIcons.classList.add('d-none');
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


          const rpgList = document.getElementById('mmorpg-list')
          const rpgDiv = document.createElement('div');
          rpgDiv.classList.add('mmo-card')
          rpgDiv.classList.add('card');
          const rpgImage = document.createElement('img');
          rpgImage.classList.add('card-img')
          rpgImage.setAttribute('src', `${element.thumbnail}`)
          
          rpgList.appendChild(rpgDiv);
          rpgDiv.appendChild(rpgImage);

          
          
        }
      })
    })
}

const disable = () => {
  document.getElementById('disable').disabled =true
}

const applied = () => {
  disable();
  // mmoGenre();
  rpgGenre();
  
}




//genre List 

  const genreList = document.getElementById('genre-list');

  const mmoList = document.createElement('button');
  mmoList.classList.add('btn', 'btn-primary');  
  mmoList.setAttribute('id', 'disable')
  mmoList.textContent = 'MMO'
  mmoList.onclick = applied

  const rpgList = document.createElement('button');
  rpgList.classList.add('btn', 'btn-primary');  
  rpgList.setAttribute('id', 'disable')
  rpgList.textContent = 'MMORPG'
  rpgList.onclick = applied
  
  const shooterList = document.createElement('button');
  shooterList.classList.add('btn', 'btn-primary');  
  shooterList.setAttribute('id', 'disable')
  shooterList.textContent = 'SHOOTER'

  const stratList = document.createElement('button');
  stratList.classList.add('btn', 'btn-primary');  
  stratList.setAttribute('id', 'disable')
  stratList.textContent = 'STRATEGY'

  const mobaList = document.createElement('button');
  mobaList.classList.add('btn', 'btn-primary');  
  mobaList.setAttribute('id', 'disable')
  mobaList.textContent = 'MOBA'

  const raceList = document.createElement('button');
  raceList.classList.add('btn', 'btn-primary');  
  raceList.setAttribute('id', 'disable')
  raceList.textContent = 'RACING'

  const sportsList = document.createElement('button');
  sportsList.classList.add('btn', 'btn-primary');  
  sportsList.setAttribute('id', 'disable')
  sportsList.textContent = 'SPORTS'

  const socialList = document.createElement('button');
  socialList.classList.add('btn', 'btn-primary');  
  socialList.setAttribute('id', 'disable')
  socialList.textContent = 'SOCIAL'

  const fightingList = document.createElement('button');
  fightingList.classList.add('btn', 'btn-primary');  
  fightingList.setAttribute('id', 'disable')
  fightingList.textContent = 'FIGHTING'

  const cardList = document.createElement('button');
  cardList.classList.add('btn', 'btn-primary');  
  cardList.setAttribute('id', 'disable')
  cardList.textContent = 'CARD GAME'


  genreList.appendChild(mmoList);
  genreList.appendChild(rpgList);
  genreList.appendChild(shooterList);
  genreList.appendChild(stratList);
  genreList.appendChild(mobaList);
  genreList.appendChild(raceList);
  genreList.appendChild(sportsList);
  genreList.appendChild(socialList);
  genreList.appendChild(fightingList);
  genreList.appendChild(cardList);
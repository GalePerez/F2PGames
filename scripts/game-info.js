const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameId =  urlParams.get('id')


const url = (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`)
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2ca2ec8f4dmsh51d5ffeca17b406p156ec8jsnca55603af315',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch(url, options)
    .then((res) => res.json())
    .then(data => {
        const gameImg = document.getElementById('game-img')
        gameImg.src = data.thumbnail;

        const gameTitle = document.getElementById('game-title')
        gameTitle.textContent = data.title;

        const gameDescription = document.getElementById('game-description')
        gameDescription.textContent = data.description

        const gameGenre = document.getElementById('game-genres')
        gameGenre.textContent = data.genre

        const gameLink = document.getElementById('game-link')
        gameLink.textContent = data.game_url




        
    })
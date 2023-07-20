const fetchGames = () => {
	const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '2ca2ec8f4dmsh51d5ffeca17b406p156ec8jsnca55603af315',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
				}
			};

			fetch (url,options) 
					.then((res) => {
						if (res.ok) {
							return res.json();
						} else {
							console.log('error');
						}
					}).then (data => {
						// discover content
						console.log('Hello WOrld')
						data.forEach(element => {

							if (element.id <= 18) {
								const discoverImage = document.getElementById('game-container');
								const discoverContainer = document.createElement('div')
								discoverContainer.classList.add('game-content', 'card', 'text-bg-dark')
								const gameImage = document.createElement('img');
								gameImage.classList.add('card-img');
								gameImage.setAttribute('src',`${element.thumbnail}`);
								discoverImage.appendChild(discoverContainer);
								discoverContainer.appendChild(gameImage);
							}

						});
					});
};




fetchGames();
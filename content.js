const navBar = () => {
	const bodyContainer = document.getElementById('navbody')
	bodyContainer.innerHTML = `
	
		<button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span> 
						<i class="fas fa-bars" style="color: #ffffff;"></i>
				</span>
		</button>
		<nav class="collapse navbar-collapse" id="navbarNav">
				<p>F2P <span>Gaming</span></p>
				<ul class="text-light">
						<li>Discover</li>
						<li>Browse</li>
				</ul>
				<input type="text" placeholder="Search..">
				<button>Search</button>

		</nav>`;

	

}



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
								console.log(discoverImage)
								discoverImage.appendChild(discoverContainer);
								discoverContainer.appendChild(gameImage);
							}

						});
					});
};




navBar();
fetchGames();
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
						data.forEach(element => {

							if (element.id <= 18) {
								const discoverImage = document.getElementById('game-container');
								const discoverContent = document.createElement('div')
								discoverContent.classList.add('game-content')

								discoverContent.innerHTML = ` 
									<div class="card text-bg-dark ">
										<img src="${element.thumbnail}" class="card-img">									
									</div>`;

								discoverImage.appendChild(discoverContent);
							}

						});

						//carousel content

						data.forEach(element => {
							if(element.id <= 12) {
								const carouselItem = document.getElementById('carousel-inner');
								carouselItem.innerHTML = `
								<div class="carousel-item active" data-bs-interval="10000">
									<img src="${element.thumbnail}" class="d-block" width="100%" height="700px">
									<div class="carousel-caption d-none d-md-block">
										<h5>${element.title}</h5>
										<p>${element.short_description}</p>
									</div>
								</div>`;

								carouselItem.appendChild('carousel-inner');
							}
							
						})
					});
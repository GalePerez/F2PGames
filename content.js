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
						data.forEach(element => {
              console.log(element.title)

						});
					});
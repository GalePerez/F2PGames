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

	

};

navBar ();
const navBar = () => {
	const bodyContainer = document.getElementById('navbody')
	bodyContainer.innerHTML = `
	
		<button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span> 
				<i class="fas fa-bars" style="color: #e0d625;"></i>
			</span>
		</button>
		<nav class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav gap-1 text-center fw-bold">
				<li class="nav-item">
						<a href="#" class="nav-link text-uppercase home" aria-current="page">Discover</a>
				</li>
				<li class="nav-item">
						<a href="#about" class="nav-link text-uppercase">Browse</a>
				</li>
			</ul>	
			<form action="">
				<input type="search" required>
				<i class="fa fa-search"></i>
			</form>	
		</nav>`;

	

};

navBar ();
const navBar = () => {
	const bodyContainer = document.getElementById('navbody')
	bodyContainer.innerHTML = `
		<a href="#" class="logo1 navbar-brand ">
		<img src="./photo/logo.png" alt="logo" width="160" height="40">
		</a>
		<button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span> 
				<i class="fas fa-bars" style="color: #e0d625;"></i>
			</span>
		</button>
		<nav class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav gap-1 text-center fw-bold">
				<li class="nav-item">
						<a href="#" class="nav-link text-uppercase home" aria-current="page">Home</a>
				</li>
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
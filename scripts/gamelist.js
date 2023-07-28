const dropContainer = document.getElementById("genre-dropdown");
const dropDown = document.createElement("div");
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

const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = { 
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ca2ec8f4dmsh51d5ffeca17b406p156ec8jsnca55603af315",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const allIcon = document.getElementById("all-icons");
      const iconContainer = document.createElement("div");
      iconContainer.classList.add("card");
      const cardImage = document.createElement("img");
      cardImage.classList.add("card-img");
      cardImage.setAttribute("src", `${element.thumbnail}`);
      cardImage.addEventListener("click", () => {
        window.location.href = `./game-info.html?id=${element.id}`;
      });

      allIcon.appendChild(iconContainer);
      iconContainer.appendChild(cardImage);
    });
  });

// game genres

const genres = [
  "All",
  "MMO",
  "MMORPG",
  "Shooter",
  "Strategy",
  "MOBA",
  "Racing",
  "Sports",
  "Social",
  "Fighting",
  "Card Games",
];

for (let i = 0; i < genres.length; i++) {
  const genList = document.getElementById("genre-list");
  const genBtn = document.createElement("button");
  genBtn.classList.add("btn", "button", "btn-primary");
  genBtn.textContent = genres[i];
  genList.appendChild(genBtn);
  genBtn.addEventListener("click", () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        const allIcon = document.getElementById("all-icons");
        allIcon.textContent = "";
        data.forEach((elements) => {
          if (elements.genre === genres[i]) {
            const iconContainer = document.createElement("div");
            iconContainer.classList.add("card");
            const cardImage = document.createElement("img");
            cardImage.classList.add("card-img");
            cardImage.setAttribute("src", `${elements.thumbnail}`);
            allIcon.appendChild(iconContainer);
            iconContainer.appendChild(cardImage);
            cardImage.addEventListener("click", () => {
              window.location.href = `./game-info.html?id=${elements.id}`;
            });
          }
        });
      });
  });
}

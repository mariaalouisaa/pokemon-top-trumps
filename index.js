let currentAttack;

function pickTrump() {
  let draw = document.querySelector(".draw-header");
  draw.classList.add("hidden");
  let pick = document.querySelector(".pick-header");
  pick.classList.remove("hidden");
  setTimeout(() => {
    let stats = document.querySelectorAll(".stat");
    stats.forEach((stat) => stat.addEventListener("click", playTrump));
  }, 100);
}

function playTrump(e) {
  e.preventDefault();
  this.style.border = "2px solid #fd2f01";
  currentAttack = this.innerHTML;
  getComputerPokemon();
}

function getComputerPokemon() {
  let random = Math.floor(Math.random() * 21);
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        showOposite(data.results[random].name);
      }, 1000);
    })
    .catch((error) => console.error(error));
}

function showOposite(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      let image = document.getElementById("card-img2");
      if (image.hasChildNodes() === false) {
        let myImage = new Image(200);
        myImage.src = data.sprites.front_default;
        image.appendChild(myImage);
      } else image.firstChild.src = data.sprites.front_default;
      let pokemonName = document.getElementById("card-name2");
      pokemonName.innerHTML = data.name;
      let type = document.getElementById("type2");
      type.innerHTML = data.types[0].type.name;
      let speed = document.getElementById("card-speed2");
      speed.innerHTML = `${data.stats[5].stat.name}: ${data.stats[5].base_stat}`;
      let attack = document.getElementById("card-attack2");
      attack.innerHTML = `${data.stats[1].stat.name}: ${data.stats[1].base_stat}`;
      let defense = document.getElementById("card-defense2");
      defense.innerHTML = `${data.stats[2].stat.name}: ${data.stats[2].base_stat}`;
      let weight = document.getElementById("card-weight2");
      weight.innerHTML = `weight: ${data.weight}`;
      let height = document.getElementById("card-height2");
      height.innerHTML = `height: ${data.height}`;
    })
    .catch((error) => console.error(error));
}

function getPokemon(event) {
  event.preventDefault();
  let random = Math.floor(Math.random() * 21);
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      getCard(data.results[random].name);
    })
    .catch((error) => console.error(error));
}

function getCard(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      let image = document.getElementById("card-img");
      if (image.hasChildNodes() === false) {
        let myImage = new Image(200);
        myImage.src = data.sprites.front_default;
        image.appendChild(myImage);
      } else image.firstChild.src = data.sprites.front_default;
      let pokemonName = document.getElementById("card-name");
      pokemonName.innerHTML = data.name;
      let type = document.getElementById("type");
      type.innerHTML = data.types[0].type.name;
      let speed = document.getElementById("card-speed");
      speed.innerHTML = `${data.stats[5].stat.name}: ${data.stats[5].base_stat}`;
      let attack = document.getElementById("card-attack");
      attack.innerHTML = `${data.stats[1].stat.name}: ${data.stats[1].base_stat}`;
      let defense = document.getElementById("card-defense");
      defense.innerHTML = `${data.stats[2].stat.name}: ${data.stats[2].base_stat}`;
      let weight = document.getElementById("card-weight");
      weight.innerHTML = `weight: ${data.weight}`;
      let height = document.getElementById("card-height");
      height.innerHTML = `height: ${data.height}`;
    })
    .then(pickTrump())
    .catch((error) => console.error(error));
}

document.getElementById("submit").addEventListener("click", getPokemon);

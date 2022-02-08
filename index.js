let currentAttack;
let player1 = document.getElementById("score1");
let player2 = document.getElementById("score2");
let draw = document.querySelector(".draw-header");
let pick = document.querySelector(".pick-header");
let imageDiv = document.getElementById("card-img2");
let score1 = 0;
let score2 = 0;

function pickTrump() {
  draw.classList.add("hidden");
  pick.classList.remove("hidden");
  setTimeout(() => {
    let stats = document.querySelectorAll(".stat");
    stats.forEach((stat) => stat.addEventListener("click", playTrump));
  }, 100);
}

function playTrump(e) {
  e.preventDefault();
  this.classList.add("selected");
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
      if (imageDiv.hasChildNodes() === false) {
        let myImage = new Image(200);
        myImage.src = data.sprites.front_default;
        imageDiv.appendChild(myImage);
      } else imageDive.firstChild.src = data.sprites.front_default;
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
      return data;
    })
    .then((data) => {
      let score = currentAttack.match(/\d+/)[0];
      if (
        (currentAttack[0] === "s" && data.stats[5].base_stat >= score) ||
        (currentAttack[0] === "a" && data.stats[1].base_stat >= score) ||
        (currentAttack[0] === "d" && data.stats[2].base_stat >= score) ||
        (currentAttack[0] === "w" && data.weight >= score) ||
        (currentAttack[0] === "h" && data.height >= score)
      ) {
        score2++;
        player2.innerHTML = `${score2}`;
      } else if (
        (currentAttack[0] === "s" && data.stats[5].base_stat <= score) ||
        (currentAttack[0] === "a" && data.stats[1].base_stat <= score) ||
        (currentAttack[0] === "d" && data.stats[5].base_stat <= score) ||
        (currentAttack[0] === "w" && data.weight <= score) ||
        (currentAttack[0] === "h" && data.height <= score)
      ) {
        score1++;
        player1.innerHTML = `${score1}`;
      }
    })
    .then(resetCards())
    .catch((error) => console.error(error));
}

function resetCards() {
  let stats = document.querySelectorAll(".stat");
  let stats2 = document.querySelectorAll(".card2 p");

  setTimeout(() => {
    Array.from(stats2).forEach((stat) => (stat.innerHTML = ""));
    imageDiv.removeChild(imageDiv.childNodes[0]);
    Array.from(stats).forEach((stat) => stat.classList.remove("selected"));
    stats.innerHTML = "";
    getPokemon();
  }, 4000);
}

function getPokemon() {
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

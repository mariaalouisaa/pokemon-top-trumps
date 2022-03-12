let player1pokemon;
let currentAttack;
let player1 = document.getElementById("score1");
let player2 = document.getElementById("score2");
let draw = document.querySelector(".draw-header");
let pick = document.querySelector(".pick-header");
let image1 = document.getElementById("card-img1");
let image2 = document.getElementById("card-img2");
let messasge = document.querySelector(".message");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
const popup = document.querySelector(".instructions")
let day = true;

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
      let bkgrd = data.types[0].type.name;
      card2.style.background = `var(--${bkgrd}-bkgr)`;
      image2.src = data.sprites.front_default;
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
      document.querySelector(".cardself2").style.transform = "rotateY(180deg)";

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
        messasge.innerHTML = `${data.name} wins!`;
        score2++;
        player2.innerHTML = `${score2}`;
      } else if (
        (currentAttack[0] === "s" && data.stats[5].base_stat <= score) ||
        (currentAttack[0] === "a" && data.stats[1].base_stat <= score) ||
        (currentAttack[0] === "d" && data.stats[5].base_stat <= score) ||
        (currentAttack[0] === "w" && data.weight <= score) ||
        (currentAttack[0] === "h" && data.height <= score)
      ) {
        messasge.innerHTML = `${player1pokemon} wins!`;
        score1++;
        player1.innerHTML = `${score1}`;
      }
      if (score1 === 10 || score2 === 10) displayWinner();
    })
    .then(resetCards())
    .catch((error) => console.error(error));
}

function displayWinner() {
  if(score1 > score2) {
    document.querySelector('#who-wins').innerHTML = 
    `You win!
  
    Play again to Catch 'Em All.
    `
  } else {
    document.querySelector('#gif').src = "sad-poke.gif"
    document.querySelector('#who-wins').innerHTML = 
`Computer wins :(

Keep practicing and you'll be a Pokemon Master in no time!
  `
  }
  document.querySelector('.winner').classList.remove('hide');
}

document.querySelector('#replay').addEventListener('click', () => {
   window.location.reload();
})

function resetCards() {
  let stats = document.querySelectorAll(".stat");

  setTimeout(() => {
    document.querySelector(".cardself2").style.transform = "rotateY(0deg)";
    document.querySelector(".cardself").style.transform = "rotateY(0deg)";
    Array.from(stats).forEach((stat) => stat.classList.remove("selected"));
  }, 4000);
  setTimeout(() => {
    getPokemon();
  }, 6000);
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
      messasge.innerHTML = "Pick your trump!";
      let bkgrd = data.types[0].type.name;
      card1.style.background = `var(--${bkgrd}-bkgr)`;
      image1.src = data.sprites.front_default;
      let pokemonName = document.getElementById("card-name");
      player1pokemon = data.name;
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
      document.querySelector(".cardself").style.transform = "rotateY(180deg)";
    })
    .then(pickTrump())
    .catch((error) => console.error(error));
}

document.getElementById("dark").addEventListener("click", (e) => {
  day ? (day = false) : (day = true);

  document.querySelector(".light").classList.toggle("dark");

  day
    ? (e.target.innerHTML = '<i class="fas fa-moon"></i>')
    : (e.target.innerHTML = '<i class="fas fa-sun"></i>');
});

document.querySelector('#close').addEventListener('click', (e) => {
  popup.classList.add('hide');
})

document.querySelector('#help').addEventListener('click', (e) => {
  popup.classList.remove('hide');
})

document.getElementById("submit").addEventListener("click", getPokemon);

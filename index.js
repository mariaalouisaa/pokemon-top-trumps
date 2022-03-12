let player1pokemon;
let currentAttack;
let score1 = 0;
let score2 = 0;
let player1 = document.getElementById("score1");
let player2 = document.getElementById("score2");
let draw = document.querySelector(".draw-header");
let pick = document.querySelector(".pick-header");
let messasge = document.querySelector(".message");
const popup = document.querySelector(".instructions")
let day = true;

function getPokemon(player) {
  let random = Math.floor(Math.random() * 21);
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      if(player === 1) {
      showOposite(data.results[random].name, player);
      } else {
          setTimeout(() => {
        showOposite(data.results[random].name, player);
      }, 1000);
      }
    })
    .catch((error) => console.error(error));
}

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
  getPokemon(2);
}

function showOposite(pokemon, player) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
    if(player === 1) {messasge.innerHTML = "Pick your trump!";};
    let bkgrd = data.types[0].type.name;
    let card = document.querySelector(`.card${player}`);
    card.style.background = `var(--${bkgrd}-bkgr)`;

    let image = document.getElementById(`card-img${player}`);
    image.src = data.sprites.front_default;

    let pokemonName = document.getElementById(`card-name${player}`);
    pokemonName.innerHTML = data.name;
    let type = document.getElementById(`type${player}`);
    type.innerHTML = data.types[0].type.name;

    let speed = document.getElementById(`card-speed${player}`);
    speed.innerHTML = `${data.stats[5].stat.name}: ${data.stats[5].base_stat}`;
      
     let attack = document.getElementById(`card-attack${player}`);
    attack.innerHTML = `${data.stats[1].stat.name}: ${data.stats[1].base_stat}`;
    
    let defense = document.getElementById(`card-defense${player}`);
    defense.innerHTML = `${data.stats[2].stat.name}: ${data.stats[2].base_stat}`;
    
    let weight = document.getElementById(`card-weight${player}`);
    weight.innerHTML = `weight: ${data.weight}`;
    
    let height = document.getElementById(`card-height${player}`);
    height.innerHTML = `height: ${data.height}`;
    
    document.querySelector(`.cardself${player}`).style.transform = "rotateY(180deg)";

     return data;
    })
    .then((data) => {
      if (player === 2) {
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
      resetCards();
    } else {
      pickTrump();
    }
    return player;
    })
    .catch((error) => console.error(error));
}

function resetCards() {
  let stats = document.querySelectorAll(".stat");

  setTimeout(() => {
    document.querySelector(".cardself2").style.transform = "rotateY(0deg)";
    document.querySelector(".cardself1").style.transform = "rotateY(0deg)";
    Array.from(stats).forEach((stat) => stat.classList.remove("selected"));
  }, 4000);
  setTimeout(() => {
    getPokemon(1);
  }, 6000);
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


document.getElementById("dark").addEventListener("click", (e) => {
  day ? (day = false) : (day = true);

  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".instructions").classList.toggle("dark");
  document.querySelector(".close").classList.toggle("dark");


  day
    ? (e.target.innerHTML = '<i class="fas fa-moon"></i>')
    : (e.target.innerHTML = '<i class="fas fa-sun"></i>');
});


Array.from(document.querySelectorAll('.popup')).forEach(item => item.addEventListener('click', (e) => {
  popup.classList.toggle('hide');
}));

document.getElementById("submit").addEventListener("click", () => { getPokemon(1) });

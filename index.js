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
    .catch((error) => console.error(error));
}

document.getElementById("submit").addEventListener("click", getPokemon);

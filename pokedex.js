// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}

const container2 = document.querySelector("#container2");

for (let i = 152; i <= 251; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container2.appendChild(pokemon);
}

const container3 = document.querySelector("#container3");

for (let i = 252; i <= 387; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container3.appendChild(pokemon);
}

const container4 = document.querySelector("#container4");

for (let i = 388; i <= 494; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container4.appendChild(pokemon);
}

const container5 = document.querySelector("#container5");

for (let i = 495; i <= 650; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container5.appendChild(pokemon);
}

const container6 = document.querySelector("#container6");

for (let i = 651; i <= 722; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container6.appendChild(pokemon);
}

const container7 = document.querySelector("#container7");

for (let i = 723; i <= 810; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container7.appendChild(pokemon);
}

const container8 = document.querySelector("#container8");

for (let i = 811; i <= 906; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container8.appendChild(pokemon);
}
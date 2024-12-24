'use strict';

const characterUl = document.querySelector('.js_characterUl');
const inputSearch = document.querySelector('.js_inputSearch');
const btnSearch = document.querySelector('.js_btnSearch');
const favouritesUl = document.querySelector('.js_favouritesUl');

let allCharacters = [];
let favourites = [];


const renderOneCharacter = (characterObj) => {
    const html = `
        <li class="js_character characters__item" id="${characterObj._id}">
            <img class="characters__img" src="${characterObj.imageUrl}">
            <h4 class="characters__name">${characterObj.name}</h4>
        </li>`;

    return html;
};

const renderAllCharacters = () => {
  let html = '';
  
  for (const characterObj of allCharacters){
      html += renderOneCharacter(characterObj);
  }
  characterUl.innerHTML = html;

  const allCharactersLi = document.querySelectorAll('.js_character');

  for (const li of allCharactersLi){
    li.addEventListener('click', handleTheBest);
  }
}

const renderFavourites = () => {
  let html = '';
  for (const characterObj of favourites){
    html += renderOneCharacter(characterObj);
  }
  favouritesUl.innerHTML = html;
}

const handleTheBest = (ev) => {
  ev.currentTarget.classList.toggle('thebest');

  const clickedId = parseInt(ev.currentTarget.id, 10);

  const clickedCharacterObj = allCharacters.find((eachCharacter) => eachCharacter._id === clickedId);
  const favouritesIdx = favourites.findIndex((eachCharacter) => eachCharacter._id === clickedId);
  
  if (favouritesIdx === -1){
    const liFavourite = renderOneCharacter(clickedCharacterObj);
    favouritesUl.innerHTML += liFavourite;

    favourites.push(clickedCharacterObj);
  }
  else {
    favourites.splice(favouritesIdx, 1);
    renderFavourites();
  }

  localStorage.setItem('charactersTheBest', JSON.stringify(favourites));
}

/*const handleSearch = () => {
  const searchText = inputSearch.value.toLowerCase();

  const filteredCharacters = allCharacters.filter(character => character.name.includes(searchText));

  let html = '';
  for (const characterObj of filteredCharacters){
    html += renderOneCharacter(characterObj);
  }
  characterUl.innerHTML = html;

  const allCharactersLi = document.querySelectorAll('.js_character');
  for (const li of allCharactersLi) {
    li.addEventListener('click' , handleSearch);
  }
};*/

//btnSearch.addEventListener('click' , handleSearch);

fetch('https://api.disneyapi.dev/character?pageSize=50')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data.data;

    renderAllCharacters();
  });

if (localStorage.getItem('charactersTheBest') !== null){
  favourites = JSON.parse(localStorage.getItem ('charactersTheBest'))
  renderFavourites();
}
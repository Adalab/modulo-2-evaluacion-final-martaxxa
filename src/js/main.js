'use strict';

const characterUl = document.querySelector('.js_characterUl');
const inputSearch = document.querySelector('.js_inputSearch');
const btnSearch = document.querySelector('.js_btnSearch');
const favouritesUl = document.querySelector('.js_favouritesUl');

let allCharacters = [];
let favourites = [];


const renderOneCharacter = (characterObj) => {
    let imageUrl;

    if (characterObj.imageUrl){
      imageUrl = characterObj.imageUrl;
    }
    else {
      imageUrl = `https://via.placeholder.com/210x295/ffffff/555555/?text=Disney`;
    }

    console.log(imageUrl);

    const html = `
        <li class="js_character characters__item" id="${characterObj._id}">
            <img class="characters__img" src="${imageUrl}" alt="${characterObj.name}" 
                 onerror="this.src='https://via.placeholder.com/210x295/ffffff/555555/?text=Disney'">
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

const renderfilteredCharacter = (filterText) => {
  const apiUrl = `https://api.disneyapi.dev/character?pageSize=50&name=${encodeURIComponent(filterText)}`;

  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data.data;
    renderAllCharacters(allCharacters);
  })
};

const handleBtnSearch = (ev) => {
  ev.preventDefault();

  const filterText = inputSearch.value.toLowerCase().trim();
  if(filterText !== '') {
    renderfilteredCharacter(filterText);
  }
  else {
    renderAllCharacters();
  }
};

btnSearch.addEventListener('click', handleBtnSearch);

fetch('https://api.disneyapi.dev/character?pageSize=50')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data.data;

    renderAllCharacters();
  });

if (localStorage.getItem('charactersTheBest') !== null){
  favourites = JSON.parse(localStorage.getItem ('charactersTheBest'))
  renderFavourites();
};
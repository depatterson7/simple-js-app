//IIFE
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//adds new data
function add(pokemon) {
  repository.push(pokemon);
}

//pulls all data
function getAll() {
  return repository;
}

//adds list for each object
function addListItem(pokemon) {
  var $pokemonList = document.querySelector('.pokemon-list');
  var $listItem = document.createElement('li');
  var $button = document.createElement('button');

  $pokemonList.appendChild($listItem);
  $listItem.appendChild($button);
  $button.innerText = pokemon.name;
  $button.classList.add('list-button');
  $listItem.classList.add('button-style');
  $button.addEventListener('click', function(event) {
    showDetails(pokemon);
  });
}

//loads list from API
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  });
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
//adds details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
    console.log(item);
  }); 

return {
  add: add,
  getAll: getAll,
  search: search,
  addListItem: addListItem,
  loadList: loadList
  loadDetails: loadDetails,
  showDetails: showDetails,
};

})();
// end of IIFE

pokemon.Repository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemon.Repository.addListItem(pokemon);
  });  
}); 
 

  
/*  if (pokemon.height > 1.5) {
        document.write(
            pokemon.name + " (height = " + pokemon.height + ") Wow, that's big! " + '<br>' + '<br>');
      }
    else {
        document.write(pokemon.name + " (height = " + pokemon.height + ") " + '<br>' + '<br>');
    } 
}); */


/* for (let i = 0; i < repository.length; i++) {
    let pokemon = repository[i]; */

 


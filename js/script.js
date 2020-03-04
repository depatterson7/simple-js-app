//IIFE
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = document.querySelector('#modal-container');

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

//This function will show a modal including title and text
function showModal(item) {
  $modalContainer.innerHTML = '';
  
    var modal = document.createElement('div');
    modal.classList.add('modal');

//Adds new modal content
var closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
closeButtonElement.addEventListener('click', hideModal);

var modalName = document.createElement('h1');
modalName.innerText = item.name;

var modalHeight = document.createElement('p');
modalHeight.innerText = item.height;

var imageElement = document.createElement('img');
imageElement.src = item.imageUrl;
  
modal.append(closeButtonElement);
modal.append(imageElement);
modal.append(modalName);
modal.append(modalHeight);
$modalContainer.appendChild(modal);

$modalContainer.classList.add('is-visible');
}

function hideModal () {
  $modalContainer.classList.remove('is-visible');
}

//This function will show details of all Pokemon
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
    pokemonRepository.showModal(item);
  }) 
};

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  showModal: showModal,
  hideModal: hideModal,
};

})();
// end of IIFE

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
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

 


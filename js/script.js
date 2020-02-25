//IIFE
var pokemonRepository = (function () {
    var repository = [
    { 
      name: 'Charmander', 
      height: 0.6, 
      type: ['fire'], 
      abilities: ['blaze', 'solar-power']
    },
    { 
      name: 'Butterfree', 
      height: 1.1, 
      type: ['bug', 'flying'], 
      abilities: ['compoundeyes', 'tinted-lens']
    },
    { 
      name: 'Weedle', 
      height: 0.3, 
      type: ['bug', 'poison'], 
      abilities: ['shield-dust', 'run-away']
    },
    { 
      name: 'Blastoise', 
      height: 1.6, 
      type: ['water'], 
      abilities: ['rain-dish', 'torrent']
    },
    { 
      name: 'Pidgeot' , 
      height: 1.5, 
      type: ['flying', 'normal'], 
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks']
    }
];

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

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
};

})();
// end of IIFE

  pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon);
    pokemonRepository.addListItem(pokemon);
  });  
// });
 
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
    console.log(pokemon);
  }); 
}  
  
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

 


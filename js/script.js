(function () {
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
}) ();

console.log(repository);

/* for (let i = 0; i < repository.length; i++) {
    let pokemon = repository[i];

 if (pokemon.height > 1.5) {
    document.write(
        pokemon.name + " (height = " + pokemon.height + ") Wow, that's big! ");
  }
else {
    document.write(pokemon.name + " (height = " + pokemon.height + ") ");
  }
} */

/* repository.forEach(function(property) {
    console.log(property);
  }); */
 
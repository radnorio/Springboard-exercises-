const dog = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
dog.bark()  //"Woooof!"

const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
sheep.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
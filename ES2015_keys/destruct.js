// destructuring process

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // this will print 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // this will print 1846 1659

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is Alejandro and your favorite color is purple
  getUserData({firstName: "Melissa"}) // your first name is melissa and your favorite color is green
  getUserData({}) // your name is undefined and your like green

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // maya
console.log(second); // marisa
console.log(third); // chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // the rest of them

  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // 10 30 20


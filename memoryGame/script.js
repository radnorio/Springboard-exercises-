let gameContainer = document.getElementById("game");
let cardP = null;
let cardS = null;
let correct = 0;
let flag = false;
//let score = document.querySelector('#score');
//let scoreNum = 0;
const Button = document.getElementById('newGame');
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
//newgame function that creates a new set of divs with different colors
function newGame(colorArray){
  gameContainer.innerHTML = '';
  shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
  correct = 0;
  // scoreNum = 0;
  // score.innerHTML = scoreNum;
}
function selectRight(){
  correct += 2;
  //remove DOM event on correct selection
  cardP.removeEventListener('click',handleCardClick);
  cardS.removeEventListener('click',handleCardClick);
  //restore default values
  cardP = null;
  cardS = null;
  flag = false;
}
function selectWrong(){
  //reset background color to default
  cardP.style.backgroundColor = '';
  cardS.style.backgroundColor = '';
  //remove selection flag flipping card
  cardP.classList.remove('flag');
  cardS.classList.remove('flag');
  //revert card selection to default for primary and secondary
  cardP = null;
  cardS = null;
  flag = false;
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // let elAction = event.target;
  if(flag) return;
  if(event.target.classList.contains('flag')) return;
  // score.innerHTML = scoreNum;
  let elAction = event.target;
  elAction.style.backgroundColor = elAction.classList[0];
  //adds flag to element and sets value of the primary and secondary card selections
  if(!cardP || !cardS){
    elAction.classList.add('flag');
    cardP = cardP || elAction;
    //conditional check for secondary card to determine if cards are similar
    cardS = elAction === cardP ? null :elAction; 
  }
  if (cardP && cardS){
    flag = true;
    //set selection flags to class value
    let finP = cardP.className;
    let finS = cardS.className;
    //if correct, use "selectRight()" func else use "selectWrong()"
    if(finP === finS){
      selectRight();
      //reset background color to default
      // cardP.style.backgroundColor = '';
      // cardS.style.backgroundColor = '';
      // //remove selection flag flipping card
      // cardP.classList.remove('flag');
      // cardS.classList.remove('flag');
      // //revert card selection to default for primary and secondary
      // cardP = null;
      // cardS = null;
      // flag = false;
    } else{
      //question about inserting a function here -- for sat
      setTimeout(selectWrong,1000);
    }
  }
  if (correct === COLORS.length) alert("you completed the game :D");
  //elAction.style.backgroundColor = elAction.toString();
  console.log(correct);
  console.log(elAction.style.backgroundColor);

  //let colorP = elAction.classList
  //console.log("you just clicked", elAction);
}
Button.addEventListener('click',newGame);
//createDivsForColors(shuffledColors);
/* */
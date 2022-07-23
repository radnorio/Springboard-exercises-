//first change
const firstDoub = (x) => {
    return x*2;
}
//combined change
const double = arr => { arr.map(element => {element * 2})};

//now the full scope of square/evens
const squareAndFindEvens = numbers => {numbers.map(val =>{ val ** 2}).filter(square => {square % 2 === 0})};

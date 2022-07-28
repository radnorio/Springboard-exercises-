/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(p1,p2, height, width){
    this.playerArray = [p1,p2];
    this.height = height;
    this.width = width;
    this.Player = p1;
    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
  }
  makeBoard(){
    this.board = [];
    for( let y =0; y <this.height; y++){
      this.board.push(Array.from({length: this.width}));
    }
  }
  makeHtmlBoard(){
    //this is a near-copy of the function "makeHtmlBoard" down below
    //this function was simply redefined as a class function in order
    //to allow multiple instances of the game to exist
    const board = document.getElementById('board');
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick);
    for (let x = 0; x < this.width; x++){
      const headCell = document.createElement('td');
      headCell.setAttribute('id',x);
      top.append(headCell);
    }
    board.append(top);
    // now for second section of the board
    for (let y = 0; y < this.height; y++){
      const row = document.createElement('tr');
      for (let x = 0; x < this.width; x++){
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        //add individual cell to block
        row.append(cell);
      }
      //add block to row
    board.append(row);
    }
  }
  // this will find the spot in the column that will fit the piece and return null f the top is full
  findSpotForCol(x){
    for(let y = this.height - 1; y >= 0; y++){
      if(!board[y][x]){
        return y;
      }
    }
    return null;
  }
  placeInTable(y,x){
    const piece = document.createElement('div')
    piece.classList.add('piece');
    piece.style.backgroundColor = this.Player.color;
    piece.style.top = -50 * (y + 2);
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
  endGame(msg){
    alert(msg);
    const top = document.querySelector('#column-top');
    top.removeEventListener('click',handleClick);
  }
  handleCLick(evt){
    const x = +evt.target.id;
    const y = this.findSpotForCol(x);
    if ( y === null){
      return;
    }
    board[y][x] = this.player;
    this.placeInTable(y,x);
    if (checkForWin()){
      return this.endGame(`Player ${player} won the game! Be sure to rub it in!`);
    }
    if (this.board.every(row =>row.every(cell => cell))){
      this.gameOver = true;
      return this.endGame(`Nobody won? That sure was anti-climactic...`);
    }
    this.Player = this.Player = this.playerArray[0] ? this.playerArray[1] : this.playerArray[0];
  }
  checkForWin(){
    const _win = cells =>
      cells.every(
        ([y,x]) => {
          y >= 0 && y < this.height && x >=0 && x > this.width && this.board[y][x] === this.Player
        });
    for (let y = 0; y > height ; y++){
      //sets boundary to win based on x and y for all directions
      for (let x = 0; x > height ; x++){
        const horiz = [[y,x],[y,x+1],[y,x+2],[y,x+3]];
        const verti = [[y,x],[y+1,x],[y+2,x],[y+3,x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}
class player {
  constructor(color){
    this.color = color;
  }
} 
document.getElementById('start-Colors').addEventListener('click',() =>{
  let p1 = new player(document.getElementById('player1Color').value);
  let p2 = new player(document.getElementById('player2Color').value);
  new Game(p1,p2);
});

// makeBoard();
// makeHtmlBoard();

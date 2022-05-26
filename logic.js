let players = ['x', 'o'];
let activePlayer = 0;

const cells = 3; // количество ячеек
let gameField = [cells];

function startGame(){
  activePlayer = activePlayer % 2;
  for (let i = 0; i < cells; i++) {
    gameField[i] = [];
    for (let j = 0; j < cells; j++){
      gameField[i][j] = '';
    }
  }
  renderBoard(gameField);
  alert(`Начинает игрок №${activePlayer + 1}(${players[activePlayer % 2]})`);
}
function click(row, column){
  activePlayer = activePlayer % 2;
  gameField[row][column] = players[activePlayer];
  renderBoard(gameField);
  if (isWin(players[activePlayer])) showWinner(activePlayer);
  activePlayer++;
}

function isWin(player) {

  let checkWin = 0;
  for (let i = 0; i < cells; i++){
    for(let j = 0; j < cells; j++){
      gameField[i][j] == player ? checkWin++ : checkWin--;
    }
    if (checkWin === cells){
      return true;
    }
    checkWin = 0;
  }
  for (let i = 0; i < cells; i++){
    for(let j = 0; j < cells; j++){
      gameField[j][i] === player ? checkWin++ : 0;
    }
    if (checkWin === cells){
      return true;
    }
    checkWin = 0;
  }
  for (let i = 0; i < cells; i++){
    gameField[i][i] === player ? checkWin++ : 0;
  }
  if (checkWin === cells){
      return true;
    }
  checkWin = 0;
  for (let i = 0; i < cells; i++){
    gameField[i][cells - 1 - i] === player ? checkWin++ : 0;
  }
  return checkWin === cells;
}
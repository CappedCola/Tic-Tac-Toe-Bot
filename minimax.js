function bestMove(){
  //ai makes move 
  let bestScore = -Infinity
  let move
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      //is this spot availble
      if(grid[i][j] === undefined){
        grid[i][j] = 'red'
        let score = minimax(grid, 0, false)
        grid[i][j] = undefined
        if(score > bestScore){
          bestScore = score
          move = {i,j}
        }
      }
    }
  }
  //return return player turn to true && make best move 'red'
  grid[move.i][move.j] = 'red'
  playerTurn = true
  madeMove = true 
}

let scores = {
  'X': 1, 
  'O': -1, 
  'tie': 0
}

function minimax(grid, depth, isMaximising){
  let result = checkWinner()
  if(result !== null){
    let score = scores[result]
    return true 
  }
}
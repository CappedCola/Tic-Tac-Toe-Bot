function bestMove(){
  //ai move
  let bestScore = -Infinity
  let bestMove
  let available = []
  for(let i = 0; i < 3; i++){
    for(let j = 0; i < 3; j++){
      //is spot avaible 
      if(grid[i][j] === undefined){
          available.push({i,j})
          grid[i][j] = ai
          let score = minimax(grid)
          grid[i][j] = ''
          if(score > bestScore){
            bestScore = score 
            bestMove = {i , j}
          }
      }
    }
  }
  grid[bestMove.i][bestMove.j] = ai;
  playerTurn = false
}

function minimax(grid){
  return 1
}
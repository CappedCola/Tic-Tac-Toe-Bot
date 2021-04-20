playerTurn = true
gameOver = false
//create 2d array for board positions
rows = 3
columns = 3 
var grid = new Array(rows)
for(var i = 0; i < grid.length; i++){
    grid[i] = new Array(columns)
}

function setup(){
    createCanvas(1800, 900)
    background(0)
    noStroke()
}

function draw(){
  //draw board to start off
  fill(255)
  rect(width/2-130, height/2-300, 10, 650, 20)
  rect(width/2+130, height/2-300, 10, 650, 20)
  rect(width/2-350, height/2-125, 700, 10, 20)
  rect(width/2-350, height/2+125, 700, 10, 20)
  
  //check if game is over
  var gridValue = 0
  for(var i = 0; i < 3; i++){
    for(var n = 0; n < 3; n++){
      if(grid[i][n] != undefined){
        gridValue = gridValue + 1
      }
    }
  }
  //check if someone won
  
  if(playerTurn === false && gridValue < 9 && gameOver == false){
    var madeMove = false
    while(madeMove === false){
      var randomX = Math.trunc(random(3))
      var randomY = Math.trunc(random(3))
      if(grid[randomX][randomY] === undefined){
        grid[randomX][randomY] = 'red'
        madeMove = true
      }
    }
    


    //computer draws move 
    fill(255,0,0)
    if(grid[0][0] === 'red'){
      circle(width/2-260, height/2-250, 200)
    }if(grid[1][0] === 'red'){
      circle(width/2-260, height/2, 200)
    }if(grid[2][0] === 'red'){
      circle(width/2-260, height/2+250, 200)         
    }if(grid[0][1] === 'red'){
      circle(width/2, height/2-250, 200)
    }if(grid[1][1] === 'red'){
      circle(width/2, height/2, 200)
    }if(grid[2][1] === 'red'){
      circle(width/2, height/2+250, 200)
    }if(grid[0][2] === 'red'){
      circle(width/2+260, height/2-250, 200)
    }if(grid[1][2] === 'red'){
      circle(width/2+260, height/2, 200)
    }if(grid[2][2] === 'red'){
      circle(width/2+260, height/2+250, 200)
    }
    playerTurn = true
    
  }
}   
//computer move/logic
function computerMove(){
  
}

//mouse clicked and player move and logic
function mouseClicked(){
    if (playerTurn === true){
      fill(0,255,0)
      if(mouseX > 535 && mouseX < 1295 && mouseY > 70 && mouseY <830){
          if (mouseX > 1035 && mouseX < 1295){
              //right side
              if (mouseY < 320 && mouseY > 70 && grid[0][2] === undefined){
                  //top 
                  circle(width/2+260, height/2-250, 200)
                  grid[0][2] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 580 && mouseY <830 && grid[2][2] === undefined){
                  //bottom 
                  circle(width/2+260, height/2+250, 200)
                  grid[2][2] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 320 && mouseY < 580 && grid[1][2] === undefined){
                  //middle
                  circle(width/2+260, height/2, 200)
                  grid[1][2] = 'green'
                  playerTurn = false
              }
          }
          if (mouseX < 765 && mouseX > 535){
              //left side
              if (mouseY < 320 && mouseY > 70 && grid[0][0] === undefined){
                  //top 
                  circle(width/2-260, height/2-250, 200)
                  grid[0][0] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 580 && mouseY <830 && grid[2][0] === undefined){
                  //bottom 
                  circle(width/2-260, height/2+250, 200)
                  grid[2][0] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 320 && mouseY < 580 && grid[1][0] === undefined){
                  //middle
                  circle(width/2-260, height/2, 200)                    
                  grid[1][0] = 'green'
                  playerTurn = false
              }
          }
          if (mouseX > 765 && mouseX < 1035){
              //middle 
              if (mouseY < 320 && mouseY > 70 && grid[0][1] === undefined){
                  //top 
                  circle(width/2, height/2-250, 200)
                  grid[0][1] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 580 && mouseY <830 && grid[2][1] === undefined){
                  //bottom 
                  circle(width/2, height/2+250, 200)
                  grid[2][1] = 'green'
                  playerTurn = false
              }
              else if (mouseY > 320 && mouseY < 580 && grid[1][1] === undefined){
                  //middle
                  circle(width/2, height/2, 200)
                  grid[1][1] = 'green'
                  playerTurn = false
              }
          }
           
        }
    
  }    
}
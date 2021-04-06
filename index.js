playerTurn = true

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
    
}   


function mouseClicked(){
    
    if (playerTurn === true){_
        fill(0, 255, 0)
        playerTurn = false
    }
    else{
        //random mov
        computerMove = Math.trunc(random(9))
        console.log(computerMove)

        playerTurn = true
    }
        if(mouseX > 535 && mouseX < 1295 && mouseY > 70 && mouseY <830){
            if (mouseX > 1035 && mouseX < 1295){
                //right side
                if (mouseY < 320 && mouseY > 70){
                    //top 
                    circle(width/2+260, height/2-250, 200)
                }
                else if (mouseY > 580 && mouseY <830){
                    //bottom 
                    circle(width/2+260, height/2+250, 200)
                }
                else if (mouseY > 320 && mouseY < 580){
                    //middle
                    circle(width/2+260, height/2, 200)
                }
            }
            if (mouseX < 765 && mouseX > 535){
                //left side
                if (mouseY < 320 && mouseY > 70){
                    //top 
                    circle(width/2-260, height/2-250, 200)
                }
                else if (mouseY > 580 && mouseY <830){
                    //bottom 
                    circle(width/2-260, height/2+250, 200)
                }
                else if (mouseY > 320 && mouseY < 580){
                    //middle
                    circle(width/2-260, height/2, 200)
                }
            }
            if (mouseX > 765 && mouseX < 1035){
                //middle 
                if (mouseY < 320 && mouseY > 70){
                    //top 
                    circle(width/2, height/2-250, 200)
                }
                else if (mouseY > 580 && mouseY <830){
                    //bottom 
                    circle(width/2, height/2+250, 200)
                }
                else if (mouseY > 320 && mouseY < 580){
                    //middle
                    circle(width/2, height/2, 200)
                }
            }
           
        }
        
}
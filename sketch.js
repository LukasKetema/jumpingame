var p1, p2
var bg
var platform


function preload(){
  p1 = loadImage("assets/player1.png")
  p2 = loadImage("assets/player2.png")
  bg = loadImage("assets/twodforest.jpg")
}



function setup(){
  createCanvas(1000,600)
  character1 = createSprite(200, 200, 200, 10)
  character2 = createSprite(600, 200, 200, 60)
  character1.addImage(p1)
  character2.addImage(p2)
  character1.scale = 0.1
  character2.scale = 0.1
}

function draw(){
  background(bg)
  //if (keyDown("space")){
  //  character1.x = character1.x + 4
  //  }
  character1.velocityX = 4
  character2.velocityX = 6
  drawSprites()
  
}



var snakeUp
var snakeDown
var snakeLeft
var snakeRight

var score = 0
function preload(){

  snakeUp = loadImage("/Assets/snakeUp.png")
  snakeLeft = loadImage("/Assets/snakeLeft.png")
  snakeRight = loadImage("/Assets/snakeRight.png")
  snakeDown = loadImage("/Assets/snakeDown.png")
}

function setup() {
  createCanvas(800,800);

  snake = new Snake()
  fruit = new Fruit()
}

function draw() {
  background(0);
  
  textSize(18)
text ("SCORE:" + score, 20, 20)

  snake.movement()

  if(snake.body.isTouching(fruit.body)){

    fruit.body.destroy()
    score += 50

    fruit = new Fruit()
  }
console.log(score)
drawSprites()
}
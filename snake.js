class Snake{

constructor(){

this.body = createSprite(100, 100, 50, 50)
this.body.x = 100
this.body.y = 100
//image (snakeUp, this.x, this.y, 30, 100)
}

movement(){

    if(keyIsDown(RIGHT_ARROW)){

        this.body.velocityX = 5
        this.body.velocityY = 0
       // image (snakeRight, this.x, this.y, 30, 100)
    }
    if(keyIsDown(LEFT_ARROW)){

        this.body.velocityX = -5
        this.body.velocityY = 0
      //  image (snakeLeft, this.x, this.y, 30, 100)
    }
    if(keyIsDown(UP_ARROW)){

        this.body.velocityY = -5
        this.body.velocityX = 0
      //  image (snakeUp, this.x, this.y, 30, 100)
    }
    if(keyIsDown(DOWN_ARROW)){

        this.body.velocityY = +5
        this.body.velocityX = 0
      //  image (snakeDown, this.x, this.y, 30, 100)

    }
}


}
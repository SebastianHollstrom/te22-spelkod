import GameObject from "./GameObject";

export default class Player extends GameObject{
    constructor(x,y,width,height,color,game){
        super(x,y,width,height,color)
        this.game = game
        this.speed = 100;
        this.velocityX = 0;
        this.velocityY = 0;
        this.moveX = 0;
        this.moveY = 0;
    }

    movement(){
        if(this.game.input.keys.has("ArrowLeft") && this.game.input.keys.has("ArrowRight")){
            this.moveX = 0;
        }
        else if(this.game.input.keys.has("ArrowLeft")){
            this.moveX = -1;
        }
        else if(this.game.input.keys.has("ArrowRight")){
            this.moveX = 1;
        }
        if(this.game.input.keys.has("ArrowDown") && this.game.input.keys.has("ArrowUp")){
            this.moveY = 0;
        }
        else if(this.game.input.keys.has("ArrowDown")){
            this.moveY = 1;
        }
        else if(this.game.input.keys.has("ArrowUp")){
            this.moveY = -1;
        }
        //var angle = Math.atan(y/x);
        this.velocityX = this.moveX;
        this.velocityY = this.moveY;
        //console.log(this.velcityX)

        this.x += this.velocityX;
        this.y += this.velocityY;
        
        this.speedDecay()
    }

    speedDecay(){
        this.moveX /= 1.05;
        this.moveY /= 1.05;
    }

    update(deltaTime){
        this.movement()

        this.x += (this.velocityX);
        this.y += (this.velocityY);
    }
}
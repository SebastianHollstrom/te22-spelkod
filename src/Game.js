import GameObject from "./GameObject" 
import Ball from "./Ball"
import Input from "./input"
import Player from "./Player"

export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 40, 200, 200, "purple")
    this.ball = new Ball(100, 350, 100, 100, "Red")
    this.input = new Input(this)
    this.player = new Player(0,0,50,50,"green",this)
  }

  update(deltaTime) {
    this.box.update(deltaTime)
    this.ball.update(deltaTime)
    this.player.update(deltaTime)
  }

  draw(ctx) {
    this.box.draw(ctx)
    this.ball.draw(ctx)
    this.player.draw(ctx)
  }
 }
export default class Input{
    constructor(game){
        this.game = game
        this.keys = new Set()

        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key)
            console.log(event.key)
        })

        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
        })
        
        /*
        window.addEventListener("mousemove", (event) => {
            console.log(event.offsetX, event.offsetY)
            //event.movementX, event.movementY
        })
        */
    }
}
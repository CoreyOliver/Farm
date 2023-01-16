
class Plant {
    constructor() {
        this.markedForDeletion = false
        this.wiltInterval = 10000
        this.wiltTimer = 0
    }
    update(deltaTime) {
        if(this.wiltTimer >= this.wiltInterval) {
            this.markedForDeletion = true
            this.wiltTimer = 0
        } else {this.wiltTimer += deltaTime}
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        // context.strokeRect(this.x,this.y,this.width,this.height)
    }
    
}

export class Grass extends Plant {
    constructor(game) {
        super()
        this.game = game
        this.width = 20
        this.height = 20
        this.x = Math.random() * this.game.width
        this.y = Math.random() * this.game.height
        this.image = grassPlot
    }
}
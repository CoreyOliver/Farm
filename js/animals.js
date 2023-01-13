 class Animal {
    constructor() {
        this.frameX = 0
        this.frameY = 3
        this.fps = 20
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
    }
    update(deltaTime) {
        this.x += this.vx
        this.y += this.vy
        if(this.frameTimer > this.frameInterval) {
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) {
                this.frameX++}
            else {this.frameX = 0}
        }else {this.frameTimer += deltaTime}
    }

    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}

export class Cow extends Animal {
    constructor(game) {
        super()
        this.game = game
        this.width = 128
        this.height = 128
        this.x = Math.random() * this.game.width * 0.5
        this.y = Math.random() * this.game.height * 0.5
        this.vx = 0
        this.vy = 0
        this.maxFrame = 4
        this.image = cow_walk
    }
    update(deltaTime) {
        super.update(deltaTime)

    }
}
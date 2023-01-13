 class Animal {
    constructor() {
        this.frameX = 0
        this.frameY = 1
        this.fps = 7
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
        context.strokeRect(this.x,this.y,this.width,this.height)
    }
}

export class Cow extends Animal {
    constructor(game) {
        super()
        this.game = game
        this.width = 48
        this.height = 48
        this.x = Math.random() * this.game.width * 0.5
        this.y = Math.random() * this.game.height * 0.5
        this.vx = 5
        this.vy = 5
        this.maxFrame = 2
        this.image = cow
    }
    update(deltaTime) {
        super.update(deltaTime)
        if(this.x + this.width > this.game.width ||
            this.x  < 0) {
            this.vx *= -1
        }
        if(this.y + this.height > this.game.height ||
            this.y < 0) {
                this.vy *= -1
            }
        if(this.vy > 0 ) {
            this.frameY = 0
        }else if(this.vy < 0) {
            this.frameY = 3
        }else if(this.vx > 0) {
            this.frameY = 2
        }else if (this.vx < 0) {
            this.frameY = 1
        }else if(this.vx === 0 && this.vy === 0) {
            this.frameY = 0
        }
    }

}
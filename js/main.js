import {Cow} from './animals.js'

const canvas = document.getElementById('canvas_field')
const ctx = canvas.getContext('2d')

canvas.height = 500
canvas.width = 1000

class Farm {
    constructor(width,height) {
        this.width = width
        this.height = height
        this.animals = [new Cow(this)]
    }
    update(deltaTime) {
        this.animals.forEach( animal => {
            animal.update(deltaTime)
        })
    }
    draw(context) {
        this.animals.forEach( animal => {
            animal.draw(context)
        })
    }
    // addAnimal() {
    //     this.animals.push(new Cow(this))
    // }
}

const farm = new Farm(canvas.width, canvas.height)
let lastTime = 0

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0,0,canvas.width, canvas.height)
    farm.update(deltaTime)
    farm.draw(ctx)
    console.log(deltaTime)
    requestAnimationFrame(animate)
}
// animate(0)
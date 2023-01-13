import {Cow} from './animals.js'

const canvasF = document.getElementById('canvas_field')
const canvasB = document.getElementById('canvas_barn')
const ctxF = canvasF.getContext('2d')
// const ctxB = canvasB.getContext('2d')

canvasF.height = 500
canvasF.width = 1000
canvasB.height = 210
canvasB.width = 400

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

const farm = new Farm(canvasF.width, canvasF.height)
let lastTime = 0

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctxF.clearRect(0,0,canvasF.width, canvasF.height)
    farm.update(deltaTime)
    farm.draw(ctxF)
    console.log(deltaTime)
    requestAnimationFrame(animate)
}
animate(0)
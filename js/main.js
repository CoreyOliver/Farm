import {Cow} from './animals'

const canvasF = document.getElementById('canvas_field')
const canvasB = document.getElementById('canvas_barn')
const ctxF = canvasF.getContext('2d')
const ctxB = canvasB.getContext('2d')

CANVASF_HEIGHT = canvasF.height = 500
CANVASF_WIDTH = canvasF.width = 1000
CANVASB_HEIGHT = canvasB.height = 210
CANVASB_WIDTH = canvasB.width = 400

class Farm {
    constructor(width,height) {
        this.width = width
        this.height = height
        this.animals = []
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

    // }
}

const farm = new Farm(canvasF.width, canvasF.height)
let lastTime = 0

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    ctxF.clearRect(0,0,canvasF.width, canvasF.height)
    farm.update(deltaTime)
    farm.draw(ctxF)
}
animate(0)
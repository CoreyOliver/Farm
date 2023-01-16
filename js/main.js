import {Cow} from './animals.js'
import { Grass } from './plants.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = 500
canvas.width = 750

class Farm {
    constructor(width,height) {
        this.width = width
        this.height = height
        this.background = new Image()
        this.background.src = grassBG
        this.animals = [new Cow(this)]
        this.plants = []
        this.sproutInterval = 10000
        this.sproutTimer = 0
    }
    update(deltaTime) {
        this.animals.forEach( animal => {
            animal.update(deltaTime)
        })
        this.plants.forEach( plant => {
            plant.update(deltaTime)
        })
        this.plants = this.plants.filter( plant => !plant.markedForDeletion)
        if(this.sproutTimer >= this.sproutInterval) {
            this.addPlant()
            this.sproutTimer = 0
        }else {this.sproutTimer += deltaTime}
    }
    draw(context) {
        this.animals.forEach( animal => {
            animal.draw(context)
        })
        this.plants.forEach( plant => {
            plant.draw(context)
        })
    }
    // addAnimal() {
    //     this.animals.push(new Cow(this))
    // }
    addPlant() {
        this.plants.push(new Grass(this))
    }
}

const farm = new Farm(canvas.width, canvas.height)
let lastTime = 0

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0,0,canvas.width, canvas.height)
    farm.update(deltaTime)
    farm.draw(ctx)
    console.log(farm)
    requestAnimationFrame(animate)
}
// animate(0)
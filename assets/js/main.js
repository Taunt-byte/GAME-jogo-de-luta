const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1050
canvas.height = 500

c.fillRect(0,0,canvas.width,canvas.height)

class Sprite{
    constructor(position){
        this.position = position
    }
}

class Umbrella{
    constructor(x,y){
        var options = {
     
        }
        this.body = Bodies.circle(x,y,50, options)
        this.image = loadImage("images/Walking Frame/walking_1.png")
        World.add(world, this.body)
    }
    draw(){
        imageMode(CENTER)
   image(this.image,10,10)
   
    }
}
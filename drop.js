class Drop{
    constructor(x,y){
        var options = {
    
         friction: 0.9,
            
        }
        this.body = Bodies.circle(x,y,5,options)
    
        World.add(world,this.body)
    }
    



display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,1,1)
    stroke(25,25,255)
}

/*update(){
    if(this.body.position.y > 400){
     Matter.body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
    
}*/
}
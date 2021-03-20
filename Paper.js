class Paper
{
    constructor(x,y)
    {
        var options ={
          
            restitution: 0.3,
            friction: 1.0,
            density: 0.4
        }
         this.body = Bodies.circle(x,y,50,options);
         this.image = loadImage("paper.png");
         this.radius = 50;
         World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;

        // push();
        //translate(pos.x,pos.y);
        //rotate(this.body.angle);
        //noStroke()
        fill("red");

        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
       // pop();
    }
}
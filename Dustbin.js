class Dustbin
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic: true
        }

         this.body =Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height = height;
         World.add(world,this.body)
         this.image = loadImage("dustbin.png");
    }
    display(){
        var pos = this.body.position;
        
        noStroke()
        imageMode(CENTER)
        image(this.image,1320,575,180,200);

    }
}
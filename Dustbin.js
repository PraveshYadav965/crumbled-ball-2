class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic: true
    }
    this.width = width;
    this.height = height;
    this.body=Bodies.rectangle(x,y,width/2,height/4,options)
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill(255);
    image(this.image,pos.x,pos.y-100,this.width,this.height)
  }
}

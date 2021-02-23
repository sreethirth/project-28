class Mango{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1.0,
      
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/images/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 20, this.width, this.height);
        pop();
      }
}
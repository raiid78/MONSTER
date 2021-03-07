class Superhero {
    constructor(x,y,width,height) {
      var options = {
          
          density: 1
      }
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;


      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("blue");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
};
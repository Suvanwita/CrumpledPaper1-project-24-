class Paper {
    constructor(x,y,radius) {
     
      var options = {
          restitution:0.04,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }
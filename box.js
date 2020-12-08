class Box {
      constructor(x,y,width,height) {
        var opt = {
            'restitution':0.8,
            'friction':0,
            'density':0.2
        }
        this.width=height
        this.height=width
        this.body=Bodies.rectangle(x,y,width,height,opt)
        World.add(world,this.body)
      }
      display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill("blue");
        rect(0, 0,this.width, this.height);
        pop()
      }
    }
  
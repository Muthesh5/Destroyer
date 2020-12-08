class Chain
{
    constructor(body1,body2)
  {
    var options=
    {
        bodyA:body1,
        bodyB:body2,
    }
    this.rope= Constraint.create(options);
    World.add(world,this.rope);
  }

  display()
  {
      fill(255)
      var posA= this.rope.bodyA.position;
      var posB =this.rope.bodyB.position;

      line(posA.x,posA.y,posB.x,posB.y)

  }
}


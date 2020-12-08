class Ball{

    constructor(x,y,r){

        var option={
            density:10,
            friction:2
        }
        this.body=Bodies.circle(x,y,r,option)

        this.x=x
        this.y=y
        this.r=r

        World.add(world,this.body)

    }

display(){

        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;

        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
       // console.log("name")
}

}
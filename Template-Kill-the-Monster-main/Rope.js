class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){

    }
    attach(body){
        
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        line(pointB.x, pointB.y, pointA.x, pointA.y);

    }
}
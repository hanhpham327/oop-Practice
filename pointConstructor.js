//how to do it in ECMA 6
class Point{
    constructor(xPos, yPos){
        this.xPos=xPos;
        this.yPos=yPos;
    }
    getPos(){
        return 'X : '+this.xPos+" Y: "+this.yPos;
    }
}


var points= new Point(100,200);
document.write("Point Pos : "+ points.getPos()+ "<br/>")


// ECMA 5

function Point(){
    this.xPos=0;
    this.yPos=0;
}
Object.defineProperty(Point.prototype,"pointPos",{
    get:function(){
        return 'X : '+this.xPos+" Y: "+this.yPos;
    },
    set:function(thePoint){
        var parts=thePoint.toString().split(",");
        this.xPos=parts[0] || "";
        this.yPos=parts[1]|| "";
    }
});
// defining the getters and setters at the same time
var aPoint= new Point();
aPoint.pointPos="100,200";
document.write("Point Position "+aPoint.pointPos+" <br/>")

// var point is how we will be defining classes in ecma 6


var Circle=function(radius){
    this._radius=radius;
}

Circle.prototype={
    set radius(radius){this._radius=radius; },
    get radius(){return this._radius;},
    get area(){return Math.PI *(this._radius*this._radius);}
};

var circ= new Circle(10);
document.write("A circle with radius "+circ.radius+ " has an area of "+ circ.area.toFixed(2)+"<br/>")
circ.radius=15;
document.write("A circle with radius "+circ.radius+ " has an area of "+ circ.area.toFixed(2)+"<br/>")
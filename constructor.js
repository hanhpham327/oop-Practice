// inheritance relies with prototypes
// Animal:name
// Dog.prototype=Animal:name

// // Dog.prototype:name 
// // object inside an object
// Dog:bark()

// Dog:bark()

function Animal(){
    this.name="Animal";
    this.toString=function(){
        return "My name is "+this.name;
    };
}

function Canine(){
    this.name="Canine";  
}

function Wolf(){
    this.name="Wolf";
}
Canine.prototype=new Animal();
// prototype is animal object
Wolf.prototype=new Canine();
// set so we can use the object then create protoyupe
Canine.prototype.constructor=Canine;
Wolf.prototype.constructor=Wolf
// assigned animal objects
var articWolf=new Wolf();
document.write(articWolf.toString()+"<br />");
document.write("Wolf instance of Animal: "+(articWolf instanceof Animal)+"<br />")
Animal.prototype.sound="Grrrr";
// changing reference
Animal.prototype.getSound=function(){
    return this.name+ " says "+this.sound;
}
Canine.prototype.sound="woof";
Wolf.prototype.sound="Grr Woof";
document.write(articWolf.getSound()+"<br />");

function Rodent(){
    this.name="Rodent";
}
function Rat(){
    this.name="Rat";
}

Rodent.prototype=new Animal();

Rat.prototype=Rodent.prototype;
Rodent.prototype.constructor=Rodent;
Rat.prototype.constructor=Rat;

var caneRat=new Rat();
document.write(caneRat.toString() +"<br/>");

function extend(Child, Parent){
    var Temp=function (){

    }
    Temp.prototype=Parent.prototype;
    Child.prototype=new Temp();
    Child.prototype.constructor=Child;

}

function Deer(){
    this.name="Deer";
    this.sound="Snort"
}
extend(Deer,Animal);

var elk=new Deer();

document.write(elk.getSound()+"<br / >")
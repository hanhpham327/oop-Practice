// every function is going to have a prototype property 
// thats going to contain an object
//  i.e. prototype proerty going to contain an object
// able to add propertyies and methods to the prototype object
// you call for them to execute they are used just as if they belong to your object
function getSum(num1,num2){
    return num1+num2;   
}
document.write("Num of argument "+ getSum.length+ "<br />")
// length of arguments
// find out the number of arguments that this function recieves
// add properties and methods to an object using protoypes

function Mammal(name){
    this.name=name;
    this.getInfo=function(){
        return "The mammals name is " +this.name;
    }
}
Mammal.prototype.sound="Grrr";
Mammal.prototype.makeSound=function(){
    return this.name+ " says "+ this.sound;
}

var grover= new Mammal("Grover");
document.write(grover.makeSound()+ "<br />")

for (var prop in grover){
    document.write(prop+" : "+ grover[prop]+"<br / >")
}

document.write("name Property of grover "+ grover.hasOwnProperty("name")+"<br />")
// is name part of grover
document.write("sound Property of grover: "+ grover.hasOwnProperty("sound")+"<br />")
// false because it is the protoype and not the object
// difference of property and creating an object
Array.prototype.inArray=function inArray(value){
    for(i=0;i<this.length;i++){
        if(this[i]=value){
            return true;
        }
    }
    return false;
}

var sampArray=[1,2,3,4,5];
document.write("3 in array "+sampArray.inArray(3)+"<br />")
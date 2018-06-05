class Animal{
    constructor(name){
        this.name=name;
    }
    toString(){
        return "Animal is name "+this.name;
    }
    static getAnimal(){
        return new Animal("No Name");
    }
}
class Dog extends Animal{
    constructor(name,owner){
        super(name);
        this.owner=owner
    }
    toString(){
        return super.toString()+"<br />Dog is named "+
        this.name;
    }
}
var rover=new Dog("Rover","Paul");
document.write(rover.name+" is owned by "+rover.owner+"<br/>");
document.write(rover.toString()+"<br />");
var bowser=Animal.getAnimal();
document.write("Bowserinfo"+bowser.toString())
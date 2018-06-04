var customer = {
    name:"Tom Smith",
    speak:function(){
        return "My name is "+this.name;
        // referencing a specific object value
    },
    // objects are seperated by commas
    address:{
        street: '123 Main St',
        city:'Pittsburgh',
        state:"PA"
    },
};

document.write(customer.speak()+"<br />")
// same thing has $(document.body).append('hello')

document.write(customer.name+" lives at "+customer.address.street+"<br />")


customer.address.country="US";
document.write(customer.address.country+"<br />")
// adding properties

//create mutliple different objects of the same type =>CONSTRUCTOR

function Person(name, street){
    this.name=name;
    this.street=street;
    this.info=function(){
        return "My name is "+this.name+" and I live on "+ this.street;
    }
    // this.function name which is info
}

var bobSmith = new Person("Bob Smith", "234 main st");
document.write(bobSmith.info()+"<br />")
document.write("Bob is a person "+ (bobSmith instanceof Person ) +"<br / >");

function changeName(person){
    person.name="Sue Smith";
}

changeName(bobSmith);
document.write("Bob became "+ bobSmith.name+"<br / >")

var person1= new Person("Paul","123 Main");
var person2= new Person("Paul","123 Main");
// object type check at Bob is a person, checking if it is part of Person Object
document.write("Are they equal "+(person1===person2)+ "<br />")
document.write(" Property of country: "+ customer.hasOwnProperty("address")+"<br />")

// objects are only going to be equal if they reference the exact same object
// doesn't mean that they'll be equal if they contain the same data

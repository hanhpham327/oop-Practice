function Hero(name){
    if(typeof Hero.instance==='object'){
        return Hero.instance;
    }
    this.name=name;
    Hero.instance=this;
    return this;
}
var derekHero=Hero("Derek")
document.write("Our hero is " +derekHero.name+"<br/>")
var paulHero=Hero("Paul")
document.write("Our hero is " +paulHero.name+"<br/>")
// this only creates only 1 hero type

// factory new object on request

function Sword(desc){
    this.weaponType='Sword';
    this.metal=desc.metal||"Steel";
    this.style=desc.style||"Longsword";
    this.hasMagic=desc.hasMagic||"false";
}
function Bow(desc){
    this.weaponType='Bow';
    this.metal=desc.metal||"Steel";
    this.style=desc.style||"LongsBow";
    this.hasMagic=desc.hasMagic||"false";
}

function WeaponFactory(){

}

WeaponFactory.prototype.makeWeapon=function(desc){
    var weaponClass=null;
    if (desc.weaponType==="Sword"){
        weaponClass=Sword;
    } else if(desc.weaponType==="Bow"){
        weaponClass=Bow;
    }else {
        return false;
    }
    return new weaponClass(desc);
}

var myWeaponFact=new WeaponFactory();

var bladeFist=myWeaponFact.makeWeapon({
    weaponType:"Sword",
    metal:"Dark Iron",
    style:"Scythe",
    hasMagic:false

})
document.write(bladeFist.weaponType+" of type "+bladeFist.style+ " crafted from "+ bladeFist.metal+ "<br/>")

function Pizza(price){
    this.price=price||10;

}
Pizza.prototype.getPrice=function(){
    return this.price;
}
function ExtraCheese(pizza){
    var prevPrice=pizza.price;
    pizza.price=prevPrice+1
}
var myPizza= new Pizza(10);
ExtraCheese(myPizza);
document.write("cost of pizza:$ "+myPizza.price)+"<br/>"
// decorator pattern
var Observable=function (){
    this.subscribers=[];
}
Observable.prototype={
    subscribe:function(subscriber){
        this.subscribers.push(subscriber);
    },
    unsubscribe:function(unsubscriber){
        for(i=0;i<this.subscribers.length;i++){
            if(this.subscribers[i]===unsubscriber){
                this.subscribers.splice(i,1);
                return unsubscriber.name;
            }
        }
    },
    publish:function(data){
        for (i=0;i<this.subscribers.length;i++){
            this.subscribers[i].recieveData(data);
        }
    }
}

var OrganFanny={
    name: "Organ Fanny",
    recieveData:function(data){
        document.write(this.name+" received your info "+ data +"<br />");
    }
}

var BoldmanYaks={
    name: "Boldman Yaks",
    recieveData:function(data){
        document.write(this.name+" received your info "+ data +"<br />");
    }
}

observable=new Observable
observable.subscribe(OrganFanny)
observable.subscribe(BoldmanYaks)
observable.publish('IBM at $145.3')
document.write(observable.unsubscribe(OrganFanny)+ " unsuscribed"+"<br/>")
observable.publish('IBM at $144.3')
// obverserver pattern
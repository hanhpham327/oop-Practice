function Vehicle(name){
    this.name="Vehicle";
}

Vehicle.prototype={
    drive:function(){
        return this.name+" drives forward";
    },
    stop: function (){
        return this.name+" stops";
    }
}
function Truck(name){
    this.name=name;
}

Truck.prototype=new Vehicle();
Truck.prototype.constructor=Truck;
Truck.prototype.drive=function(){
    var driveMsg=Vehicle.prototype.drive.apply(this);
    // call the vehicle version of drive
    return driveMsg+=" through a field";
}

var jeep= new Truck("Jeep");
document.write(jeep.drive()+ "<br />");
// grab the drive forward from parent of vehicle and used the name
document.write(jeep.stop()+ "<br />");
// this was added through the truck method
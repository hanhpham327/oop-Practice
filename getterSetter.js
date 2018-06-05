var address={
    street:"No Street",
    city:"No City",
    state:"No State",
    get getAddress(){
        return this.street+ " , "+this.city+ " , "+this.state;
    },
    // get combines all the data
    set setAddress(theAddress){
        var parts= theAddress.toString().split(", ");
        this.street=parts[0] || "";
        this.city=parts[1]|| "";
        this.state=parts[2]||"";
    }
    // the user will pass in parameters
}

address.setAddress="123 main st, pittsburgh, pa";
// the address that a user types in
document.write("Address: "+address.getAddress+ "<br / >")
// the full address
document.write("City: "+address.city+ "<br / >")
// accessing the address object with the set Address that was created


// protect your data and set the values
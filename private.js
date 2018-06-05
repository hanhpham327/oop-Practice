function SecretCode(){
    var secretNum=78;
    // adding a var is just to protect the property
    this.guessNum=function(num)    {
        if(num>secretNum){
            return "Lower";
        }else if (num<78){
            return "Higher";
        }else{
            return "You guessed it";
        }
    }
}

var secret= new SecretCode();
document.write("Value of secretnum :" +secret.secretNum +"<br/>")
document.write("Is 70 the number :" +secret.guessNum(70) +"<br/>")

SecretCode.prototype.getSecret=function(){
    return this.secretNum;
}

document.write("The secret number is "+secret.getSecret())
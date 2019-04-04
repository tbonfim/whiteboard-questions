(function(){
    /* 
        Prototype implementatios: Assuming I could change the original given class
    */

    class Dog {
        constructor (){
            this.steps = 0;
        }
    }
    Dog.prototype.walk = function(){
        this.steps += 1;
    };
    Dog.prototype.talk = function(){
        return "woof";
    };
    
    class Husky extends Dog {}

    Husky.prototype.walk = function(){
        this.steps += 2;
    }
    Husky.prototype.talk = function() {
        return "wooooooof";
    }
    class Poodle extends Dog{}
    Poodle.prototype.walk = function(){
        this.steps += 0.5;
    }
    Poodle.prototype.talk = function() {
        return "woof woof";
    }
    
    /* New dog class */
    class PoodleHusky extends Dog{}
    PoodleHusky.prototype.talk = Poodle.prototype.talk;
    PoodleHusky.prototype.walk = Husky.prototype.walk;

    var husky = new Husky();
    var poodle = new Poodle();
    var poodleHusky = new PoodleHusky();
    
    // results 
    poodleHusky.walk();
    husky.walk();
    console.log( "Walk count for Husky : " + husky.steps );
    console.log( "Walk count for PoodleHusky : " + poodleHusky.steps );

    console.log( "Poodle talk : " + poodle.talk());
    console.log( "PoodleHusky talk : " + poodleHusky.talk());
}());
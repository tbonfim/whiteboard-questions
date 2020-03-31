(function(){
    /* 
        Assuming you have the following javascript classes:
        
        class Dog {
            constructor (){
                this.steps = 0;
            }
            walk = function(){
                this.steps += 1;
            }
            talk =  function(){
                return "woof";
            }
        }
        class Husky extends Dog {
            walk = function(){
                this.steps += 2;
            }
            talk = function() {
                return "wooooooof";
            }
        }
        class Poodle extends Dog{
            walk = function(){
                this.steps += 0.5;
            }
            talk = function() {
                return "woof woof";
            }
        }

        Create a new dog class where 1) Walks like a Husky; 2) Talks like a  Poodle.
    */

    class Dog {
        constructor (){
            this.steps = 0;
        }
        walk = function(){
            this.steps += 1;
        }
        talk =  function(){
            return "woof";
        }
    }
    class Husky extends Dog {
        walk = function(){
            this.steps += 2;
        }
        talk = function() {
            return "wooooooof";
        }
    }
    class Poodle extends Dog{
        walk = function(){
            this.steps += 0.5;
        }
        talk = function() {
            return "woof woof";
        }
    }
    
    /* New dog class */
    
    
    var husky = new Husky();
    var poodle = new Poodle();

    class PoodleHusky extends Dog{
        walk = husky.walk
        talk = poodle.talk
    }
    var poodleHusky = new PoodleHusky();
    
    // results 
    poodleHusky.walk();
    husky.walk();
    console.log( "Walk count for Husky : " + husky.steps );
    console.log( "Walk count for PoodleHusky : " + poodleHusky.steps );

    console.log( "Poodle talk : " + poodle.talk());
    console.log( "PoodleHusky talk : " + poodleHusky.talk());
}());
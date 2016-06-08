// JavaScript source code
(function () {
    "use strict"

    function Animal(name, age) {

        this.name = name;
        this.age = age;       
    }
    function Dog(name, age, IsTrained) {

        Animal.call(this, name,age);

        this.IsTrained = IsTrained;
    }
    function WolfDog(name, age, IsTrained, color) {

        
        Dog.call(this, name, age, IsTrained);
        this.color = color;

    }

    function Cat(name,age,food) {
        Animal.call(this, name, age);
        this.food = food;
    }
     
    Dog.prototype = new Animal();
    WolfDog.prototype = new Dog();
    Cat.prototype = new Animal();


    Dog.prototype.toString = function () {

        return this.name + " " + this.age + " " + this.IsTrained;
    }

    WolfDog.prototype.toString = function() {

        return this.name + " " + this.age + " " + this.IsTrained + " " + this.color;

    }

    Cat.prototype.toString = function() {

        return this.name + " " + this.age + " "  + this.food;

    }

    var tokyo = new Dog("tokyo", 3 ,true);
    
    alert(tokyo.toString());

    WolfDog.prototype.toString = function () {

        return this.name + " " + this.age + " " + this.IsTrained + " " + this.color;

    }

    var duke = new WolfDog("duke",6,false,"black")
    alert(duke.toString());

    var maldini = new Cat("maldini",4, "LaCat");
    alert(maldini.toString());
})();
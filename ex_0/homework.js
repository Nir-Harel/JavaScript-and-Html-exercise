// JavaScript source code
(function () {
    "use strict"

    function Animal(name, age) {

        this.name = name;
        this.age = age;       
    }
    function Dog(name, age, Ismeulafted) {

        Animal.call(this, name,age);

        this.Ismeulafted = Ismeulafted;
    }
    function WulfDog(name,age,Ismeulafted,color) {

        //Animal.call(this, name, age);
        Dog.call(this, name, age, Ismeulafted);
        this.color = color;

    }

    function Cat(name,age,food) {
        Animal.call(this, name, age);
        this.food = food;
    }
     
    Dog.prototype = new Animal();
    WulfDog.prototype = new Dog();
    Cat.prototype = new Animal();


    Dog.prototype.toString = function () {

        return this.name + " " + this.age + " " + this.Ismeulafted;
    }

    WulfDog.prototype.toString = function() {

        return this.name + " " + this.age + " " + this.Ismeulafted+ " " + this.color;

    }

    Cat.prototype.toString = function() {

        return this.name + " " + this.age + " "  + this.food;

    }

    var tokyo = new Dog("tokyo", 3 ,true);
    
    alert(tokyo.toString());

    WulfDog.prototype.toString = function () {

        return this.name + " " + this.age + " " + this.Ismeulafted + " " + this.color;

    }

    var duke = new WulfDog("duke",6,false,"black")
    alert(duke.toString());

    var maldini = new Cat("maldini",4, "LaCat");
    alert(maldini.toString());
})();
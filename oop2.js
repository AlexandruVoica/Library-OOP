// 1
var customer = {
  name: "Tom Smith",
  speak: function() {
    return "My name is " + this.name;
  },

  address: {
    street: "123 Main St",
    city: "Pittsburgh",
    state: "PA"
  }
};

console.log(customer.speak());

console.log(customer.name + " lives at " + customer.address.street);

customer.address.country = "US";

console.log(customer.address.country);


// 2
function Person(name, street) {
  this.name = name;
  this.street = street;
  this.info = function(){
    return "My name is " + this.name + " and I live on " + this.street;
  }
}

var bobSmith = new Person("Bob Smith", "234 Main St");

console.log(bobSmith.info());


console.log("Is Bob a Person?");
console.log(bobSmith instanceof Person);


// 3
function changeName(person) {
  person.name = "Sue Smith"; // token name, will refactor
}

// Objects are passed by reference
changeNAme(bobSmith);

console.log("Bob became " + bobSmith.name);


// 4 - comparing objects
var person1 = new Person("Paul", "123 Main St");
var person2 = new Person("Paul", "123 Main St");

console.log("Are person1 and person2 equal?");
// Will return true only if they reference the same object
console.log(person1 === person2); // false
console.log(person1 == person2); // false
// == checks the value
// === checks the value AND type


// 5 - prototypes
// Every function has a prototype (reserved keyword) property
// Added methods or properties to the prototype get inherited by the objects
function getSum(num1, num2) {
  return num1 + num2;
}

console.log("Number of arguments: " + getSum.length); // returns 2

function Mammal (name) {
  this.name = name;
  this.getInfo = function() {
    return "The mammal's name is " + this.name;
  }
}

// Adding a new variable to the prototype, thus to the object
Mammal.prototype.sound = "Grrrr";

// Adding a new method to the prototype, thus to the object
Mammal.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
}

var grover = new Mammal("Grover");

console.log(grover.makeSound());

// List the object's properties
for (var prop in grover) {
  console.log(prop + " : " + grover[prop]);
}

// Check if a property belongs to an object
console.log("Is name a Property of grover : " + grover.hasOwnProperty("name")); // true

console.log("Is sound a Property of grover : " + grover.hasOwnProperty("sound")); // false - because it was added to the prototype, NOT the object itself


// 6 - private properties
// Every property of an object are by default public, meaning any function can modify or delete it
// The properties can be made private by declaring them as variables inside a constructor
function SecretCode() {
  var secretNumber = 78;

  this. guessNumber = function(num) {
    if (num > secretNumber) {
      return "Lower";
    } else if (num < secretNumber) {
      return "Higher";
    } else if (num === secretNumber) {
      return "You guessed it!";
    }
  }
}

var secret = new SecretCode();

console.log("Value of secret number is " + secret.secretNumber); // undefined

console.log("Is 70 the number?");
console.log(secret.guessNumber(70)); // "Higher"

SecretCode.prototype.getSecret = function() {
  return this.secretNumber;
}

console.log(secret.getSecret()); // undefined

// Neither listing the propertis will show the number


// 7 - getters and setters
// Getters and setters will allow to transfer data (get) and also modify it (set)
// This way the data is also protected (private properties) and able to validated (not allowing to enter a number when a string is needed)
var address = {
  street: "No Street",
  city: "No City",
  state: "No State",

  get getAddress() {
    return this.street + ", " + this.city + ", " + this.state;
  },

  set setAddress(theAddress){
    // The first step of a setter should be validating the data
    // For the sake of this exercise, the first step will be omitted
    var parts = theAddress.toString().split(", ");
    this.street = parts[0] || "" ;
    this.city = parts[1] || "";
    this.state = parts[2] || "";
  }

}

// Because it was declared with keywords get and set, the methods do not need to be called as a function

address.setAddress = "123 Main St, Pittsburgh, PA";

console.log("Address: " + address.getAddress);
console.log("City: " + address.city);


// 8 - another way to define getters and setters
function Point() {
  this.xPos = 0;
  this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
  get: function() {
    return xPos + ", " + yPos;
  },
  set: function(thePoint) {
    var parts = thePoint.toString().split(", "); // returns a Set instance
    this.xPos = parts[0] || "" ;
    this.yPos = parts[1] || "";
  }
});

var pointA = new Point();

pointA.pointPos = "100, 200"; // sets the position of the point

console.log(pointA.pointPos); // gets the position of the point


// 9 - ES6 method of defining getts and setters
var Circle = function(radius) {
  this._radius = radius;
}

Circle.prototype = {
  set radius(radius) {
    this._radius = radius;
  },
  get radius() {
    return this._radius;
  },
  get area() {
    return Math.PI * (this._radius * this._radius);
  }
};

var newCircle = new Circle(10);

newCircle.radius = 15;

console.log("A circle with radius " + newCircle.radius + " has an area of " + newCircle.area.toFixed(2));


// 10 - inheritance
// When looking for a property, JS first looks at the object definition, then at the prototype
function Animal() {
  this.name = "Animal";

  // This is how easy it is to overwrite standard JS functions
  this.toString = function() {
    return "My name is " + this.name;
  }
}

function Canine() {
  this.name = "Canine";
}

function Wolf() {
  this.name = "Wolf";
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();
// After you overwrite a prototype, its constructor is gonna point to the main object Object, so it has to be reset
Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

console.log(arcticWolf.toString()); // Wolf says Grrrr Woof

Animal.prototype.sound = "Grrrr";
Animal.prototype.getSound = function() {
  return this.name + " says " + this.sound;
};

Canine.prototype.sound = "Woof";
Wolf.prototype.sound = "Grrrr Woof";

console.log(arcticWolf.getSound());

//
function Rodent() {
  this.name = "Rodent";
}

function Rat() {
  this.name = "Rat";
}

Rodent.prototype = new Animal();

Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

console.log(caneRat.toString()); // My name is Rat


// 11 - inheritance through an intermediate function
function extend(Child, Parent) {
  var Temp = function(){};

  Temp.prototype = Parent.prototype;

  Child.prototype = new Temp();

  Child.prototype.constructor = Child;
}

function Deer() {
  this.name = "Deer";
  this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer();

console.log(elk.getSound()); // Deer says Snort


// 12 - call parent functions
function Vehicle(name) {
  this.name = "Vehicle";
}

Vehicle.prototype = {
  drive: function() {
    return this.name + " drives forward";
  },
  stop: function(){
    return this.name + " stops";
  }
};

function Truck(name) {
  this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function() {
  var driveMsg = Vehicle.prototype.drive.apply(this);
  // apply() allows to call Parent version of the same function even though it is overwritten

  return driveMsg += " through a field";
};

var jeep = new Truck("Jeep");

console.log(jeep.drive()); // Jeep drives forwards through a field
console.log(jeep.stop()); // Jeep stops


// 13 - ES6 changes
// function declaration changes
var addStuff = {
  sum: function(num1, num2) {
    return num1 + num2;
  }
};

console.log("1 + 2 = " + addStuff(1, 2));

var addStuff = {
  sum(num1, num2) {
    return num1 + num2;
  }
}

console.log("1 + 2 = " + addStuff(1, 2));

// class changes
// JS - declaring a class
function Point(xPos, yPos) {
  this.xPos = 0;
  this.yPos = 0;
}

Point.prototype.getPos = function() {
  return this.xPos + ", " + this.yPos;
}

var pointA = new Point(100, 200);

console.log(pointA.getPos());

// ES6 - declaring a class
class Point {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  // no comma needed
  getPos() {
    return this.xPos + ", " + this.yPos;
  }
}

var point = new Point(100, 200);

console.log(pointA.getPos());

class Animal {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return "I am an " + this.name;
  }

  static getAnima() {
    return new Animal("No name");
  }
}

// extends = inherits
class Dog extends Animal {
  constructor(name, owner){
    super(name); // calls the constructor of the super class
    this.owner = owner;
  }

  toString() {
    return super.toString() + " and Dog is named " + this.name;
  }
}

var rover = new Dog("Rover", "Paul");

console.log(rover.name + " is owned by " + rover.owner);
console.log(rover.toString());

var bowser = Animal.getAnimal();

console.log(bowser.toString());


// 14 - Design patterns: Singleton
function Hero(name) {
  // Since this object is supposed to be unique, check if it already exists, and if it does, return that object
  if (typeof Hero.instance === "object") {
    return Hero.instance;
  }

  this.name = name;
  Hero.instance = this;
  return this;
}

var oneHero = new Hero("Valiant");
console.log(oneHero.name + " starts his journey");

var secondHero = new Hero("Hope");
console.log(secondHero.name + " starts her journey");
// the second calling of the constructor will point to the same first object created


// 15 - Design patterns: Factory
function Sword(description) {
  this.weaponType = "Sword";
  this.weaponMaterial = description.material || "Steel";
  this.weaponStyle = description.style || "Longsword";
  this.hasMagic = description.hasMagic || false;
}

function Bow(description) {
  this.weaponType = "Bow";
  this.weaponMaterial = description.material || "Wood";
  this.weaponStyle = description.style || "Longbow";
  this.hasMagic = description.hasMagic || false;
}

function WeaponFactory() {}

WeaponFactory.prototype.makeWeapon = function(description) {
  var weaponClass = null;

  if (description.weaponType === "Sword") {
    weaponClass = Sword;
  } else if (description.weaponType === "Bow") {
    weaponClass = Bow;
  } else {
    return false;
  }

  return new weaponClass(description);
}

var myWeaponFactory = new WeaponFactory();

var bladeFist = myWeaponFactory.makeWeapon({
  weaponType: "Sword",
  material: "Dark Iron",
  style: "Scythe",
  hasMagic: true
});


// 16 - Design patterns: Decorator
function Pizza(price) {
  this.price = price || 10;
}

Pizza.prototype.getPrice = function() {
  return this.price;
}

function ExtraCheese(pizza) {
  var prevPrice = pizza.price;

  pizza.price = prevPrice + 1;
}

var myPizza = new Pizza(10);

ExtraCheese(myPizza);

console.log("Cost of pizza: $" + myPizza.price);


// 17 - Design patterns: Observer
// The Observer pattern is going to use a single object to notify multiple other objects when a state change occurs
var Observable = function() {
  this.subscribers = [];
}

Observable.prototype = {
  subscribe: function(subscriber) {
    this.subscribers.push(subscriber);
  },

  unsubscribe: function(unsubscriber) {
    for(i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === unsubscriber) {
        this.subscribers.splice(i, 1);

        return unsubscriber.name;
      }
    }
  },

  publish: function(data) {
    for(i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].receiveData(data);
    }
  }
};

var OrganFanny = {
  name: "Organ Fanny",
  receiveData: function(data) {
    return this.name + " received your info " + data;
  }
}

var BoldmanYaks = {
  name: "Boldman Yaks",
  receiveData: function(data) {
    return this.name + " received your info " + data;
  }
}

var observable = new Observable();

observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);

observable.publish("IBM at $145.32");

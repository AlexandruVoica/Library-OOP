// An intro to OOJS

// State 1
console.log("Hello, my name is John Doe and my favorite color is blue.");
console.log("Hello, my name is Jane Smith and my favorite color is orange.");

// State 2
function personS2(name, color) {
  console.log("Hello, my name is " + name + " and my favorite color is " + color + ".");
}

personS2("John Doe", "blue");
personS2("Jane Smith", "orange");

// State 3 
function personS3(name, color) {
  console.log("Hello, my name is " + name + " and my favorite color is " + color + ".");
}

var firstPersonName = "John Doe";
var firstPersonColor = "blue";
var secondPersonName = "Jane Smith";
var secondPersonColor = "orange";

personS3(firstPersonName, firstPersonColor);
personS3(secondPersonName, secondPersonColor);

// State 4 
function personS4(name, color) {
  console.log("Hello, my name is " + name + " and my favorite color is " + color + ".");
}

var firstPerson = {
  name: "John Doe",
  color: "blue"
};
var secondPerson = {
  name: "Jane Smith",
  color: "orange"
};

personS4(firstPerson.name, firstPerson.color);
personS4(secondPerson.name, secondPerson.color);

// State 5
var firstPerson = {
  name: "John Doe",
  color: "blue",
  greet: function() {
    console.log("Hello, my name is " + firstPerson.name + " and my favorite color is " + firstPerson.color + ".")
  }
};
var secondPerson = {
  name: "Jane Smith",
  color: "orange",
  greet: function() {
    console.log("Hello, my name is " + secondPerson.name + " and my favorite color is " + secondPerson.color + ".")
  }
};

firstPerson.greet();
secondPerson.greet();

// State 6.0
// class Person
function PersonS60() {
  this.greet = function() {
    console.log("Hello!");
  }
}

var john = new PersonS60();
john.greet();
var jane = new PersonS60();
jane.greet();

// State 6.1
// class Person
function Person61(name, color) {
  this.name = name;
  this.color = color;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".")
  }
}

var john = new Person61("John Doe", "blue");
john.greet();
var jane = new Person61("Jane Smith", "orange");
jane.greet();
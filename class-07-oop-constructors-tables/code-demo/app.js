'use strict';

// making a constructor function
function Car(make, model, year){
  this.brand = make;
  this.carType = model;
  this.yearPurchased = year;
  var maxSpeed = 200; // mph
  this.drive = function(){
    console.log('You are now driving.');
  };
  cars.push(this); // YOU DO NOT NEED TO DO THIS! ONLY DO THIS IF YOU UNDERSTAND IT!
};

var car = {
  make: 'Nissan',
  model: 'Altima',
  year: 2016
};

var altima = new Car('Nissan', 'Altima', 2016);
var camry = new Car('Toyota', 'Camry', 1998);

var cars = [];
var brands = ['Nissan', 'Toyota', 'Honda', 'Tesla'];
var models = ['Altima', 'Camry', 'Civic', '3'];
var years = [2016, 1998, 2003, 2018];

for (var i = 0; i < brands.length; i++) {
  var car = new Car(brands[i], models[i], years[i]);
  cars.push(car);
}

camry.dontEverDie = function(){};
Car.prototype.brake = function(){};

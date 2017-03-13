'use strict';

var car = {
  wheels: 4,
  isMoving: false,
  'year made': 2016,
  manufacturer: 'Nissan',
  drive: function(){
    var foo = 'bar';
    this.isMoving = true;
    if (this.isMoving) {
      this.lockDoors();
    }
    console.log('Is this car moving? ' + this.isMoving);
  },
  lockDoors: function(){
    this.doorsLocked = true;
  },
  brake: function(){
    this.isMoving = false;
  }
};
car.isMoving = 'banana';
car['isMoving'] = [1, 2, 3];

function Building(name, value, address) {
  this.buildingName = name;
  this.evaluatedAmount = value;
  this.address = address;
  var bathroom = 'operational';
  this.inhabited = function(){
    this.tenants = true;
  };
}

function Person(name, age, grade){
  this.name = name;
  this.age = age;
  this.grade = grade;
  var divisor = 25;
  this.calculateGPA = function(){
    return this.grade / divisor;
  };
}
var david = new Person('David', '30-something', 92);
var amanda = new Person('Amanda', null, 97);
var people = [];

var names = ['David', 'Amanda', 'Becky', 'Ben'];
var ages = [88, 5, 102, -12];
for (var i = 0; i < names.length; i++) {
  people.push(new Person(names[i], ages[i], Math.random()));
  console.log('Just made ' + names[i]);
}

var newNav = ['Facebook', 'Instagram', 'Twitter'];

var navLinks = document.getElementsByClassName('nav-link');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].innerText = newNav[i];
}

var user = {
  authenticated: true
};

var navList = document.getElementsByTagName('ul')[0];
var newListItem = document.createElement('li');
var newLink = document.createElement('a');
newLink.setAttribute('href', 'http://news.ycombinator.com');
newLink.innerText = 'Hacker News';
newListItem.appendChild(newLink);
newListItem.setAttribute('class', 'some-list-class');
navList.appendChild(newListItem);

var hours = ['8am', '9am', ...]; // this is not functioning js

function () {
  for (var i = 0; i < hours.length; i++) {
    // do some operation
    // this operation should push new cookie sales for every hour
  }
}

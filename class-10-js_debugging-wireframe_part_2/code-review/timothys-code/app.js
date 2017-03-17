'use strict';

var openingHours = ['Store/Hour', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeName = [['1st and Pike', 23, 65, 6.3], ['SeaTac Airport', 3, 24, 1.2], ['Seattle Center', 11, 38, 3.7], ['Capital Hill', 20, 38, 2.3], ['Alki', 2, 16, 4.6]];

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
body.appendChild(myTable);
var elForm = document.getElementById('Form');

function tableHeading () {
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  for (var i = 0; i < openingHours.length; i++) {
    var storeHour = document.createElement('th');
    storeHour.textContent = openingHours[i];
    tableRow.appendChild(storeHour);
  }
  tableHead.appendChild(tableRow);
  myTable.appendChild(tableHead);
}

tableHeading();

function CookiesStore (location, min, max, avg) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCookieSale = avg;
  this.storeLocation = location;
  this.saleEachHour = [];
  this.randomCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
  };
  this.salePerHour = function () {
    for (var i = 0; i < openingHours.length - 1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
  };
  this.createStore = function() {
    this.salePerHour();
    var tableB = document.createElement('tbody');
    var tableRow = document.createElement('tr');
    var storeArea = document.createElement('th');
    storeArea.textContent = this.storeLocation;
    tableRow.appendChild(storeArea);
    for (var i = 0; i < openingHours.length - 1; i++) {
      var hourList = document.createElement('td');
      hourList.textContent = this.saleEachHour[i];
      tableRow.appendChild(hourList);
    };
    tableB.appendChild(tableRow);
    myTable.appendChild(tableB);
  };
}

function newStore () {
  for (var i = 0; i < storeName.length; i++) {
    var makeStore = new CookiesStore(storeName[i][0], storeName[i][1], storeName[i][2], storeName[i][3]);
    makeStore.createStore();
  }
};
newStore();

function handleFormSubmission(event){
  // somehow you handle the form submission
};
elForm.addEventListener('submit', handleFormSubmission);

function handleClickEvent(aName){
  alert('You clicked on this field! ' + aName);
};
var formField = document.getElementById('store-name');
// formField.addEventListener('click', handleClickEvent);
formField.addEventListener('click', function(){
  var someName = 'Potato Master';
  handleClickEvent(someName);
});

function carouselHandler(){
  var leftOrRight = this.getAttribute('direction');
  if (leftOrRight === "left") {
    alert('You moved left!');
  } else if (leftOrRight === "right") {
    // move it right
    alert('You moved right!');
  }
}
var carouselControls = document.getElementsByClassName('carousel-nav');
carouselControls[0].addEventListener('click', carouselHandler);
carouselControls[1].addEventListener('click', carouselHandler);

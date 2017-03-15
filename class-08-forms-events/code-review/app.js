'use strict';

var storeHrs = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var body = document.getElementsByTagName('body')[0];
var allStores = []; // will hold every store that gets built; currently holds nothing

var oneAndPike = new CookieStand('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

function CookieStand(name, minHrlyCustomers, maxHrlyCustomers, avgCookiesPerCust) {
  this.name = name;
  this.minHrlyCustomers = minHrlyCustomers;
  this.maxHrlyCustomers = maxHrlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.total = 0;
  this.salesArr = [];
  this.customersPerHr = function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
  };

  this.dailyCookies = function() {
    for (var i = 0; i < storeHrs.length - 1; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  };

  this.generateTableRow = function() {
    this.dailyCookies(); // this line populates the sales array
    var table = document.getElementsByTagName('table')[0];
    var tRow = document.createElement('tr');
    var tableBody = document.getElementById('table-body');
    tableBody.appendChild(tRow);
    var nameTD = document.createElement('th');
    nameTD.innerText = this.name; // the first column in the new row
    tRow.appendChild(nameTD);
    for (var i = 0; i < storeHrs.length - 1; i++) {
      var newTD = document.createElement('td'); // create a new td element
      newTD.innerText = this.salesArr[i]; // take the sales for an individual hour, and assign it to the td
      tRow.appendChild(newTD); // append the td to the store's row
    }
  };
  allStores.push(this); // automatically adds the entire object to the allStores array upon construction.
}

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tRow = document.createElement('tr');
  tableHead.appendChild(tRow);
  for (var i = 0; i < storeHrs.length; i++) {
    var th = document.createElement('th');
    th.innerText = storeHrs[i];
    tRow.appendChild(th);
  }
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  tableBody.id = 'table-body';
};
createTable();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}

// oneAndPike.generateTableRow();
// seaTacAirport.generateTableRow();
// seattleCenter.generateTableRow();
// capitolHill.generateTableRow();
// alki.generateTableRow();

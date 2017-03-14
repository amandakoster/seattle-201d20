'use strict';

/*
Write some JS that will estimate the amount of cookies sold per hour for all
hours of operation, for 5 stores. This JS will populate the sales.html page
with 5 lists, one for each store. And every list item will be an hour of time
and contain the sales for that hour.

Before the list starts, there will be an h2 tag with the title of the store.
The last list item for each store will be the total of the sales for that day.
*/
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  salesArr: [], // the array of all sales
  name: '1st and Pike',
  randCust: function () { // generate a random number of customers
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    // Math.random() returns number between 0 and 1
    // (this.maxCust - this.minCust + 1) sets the range of numbers that can be returned
    // the final (this.minCust) raises the lower limit from 0 to your actual minimum
  },
  cookiesSold: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randCust()); // generates a random number of cookies for a given hour
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour; // total = total + cookiesPerHour
    }
    this.salesArr.push(total); // adds the total number of sales for the day to the sales array
  },
  createListItems: function(){ // create the li elements and append them to a specified ul element
    var newHeading = document.createElement('h2'); // print the name of the store to the page and do it before the for loop
    body.appendChild(newHeading); // append the h2 to the body
    newHeading.innerText = this.name; // create text for the h2
    var firstUl = document.createElement('ul'); // create the UL that will contain the following LI tags
    for (var i = 0; i < storeHours.length; i++) { // for every hour I want to put the cookies sold for that hour, as well as the total for the day
      var newListItem = document.createElement('li'); // creates a list item
      newListItem.innerText = storeHours[i] + ': ' + this.salesArr[i] + ' cookies';// Populate the list items with information about cookies sold for each hour
      firstUl.appendChild(newListItem); // append the new list item to the ul tag that we created
    }
    body.appendChild(firstUl); // appends the ul tag to the existing body.
  }
};

firstAndPike.cookiesSold(); // run the cookies sold method and generate sales for the day.
firstAndPike.createListItems();

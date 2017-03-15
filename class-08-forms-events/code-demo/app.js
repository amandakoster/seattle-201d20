'use strict';

var form = document.getElementById('the-form');
function alertTheUser(event){
  event.preventDefault(); // stops the form from submitting and leaving the page.
  // time for the harvest
  var theFormItself = event.target;
  // the "elements" attribute of the event.target object holds (for a form) all of the form fields by name
  console.log(theFormItself.elements['firstname'].value);
};
form.addEventListener('submit', alertTheUser);

var firstname = document.getElementById('firstname');
function capitalizeEverything(event){
  // var theText = this.value;
  this.value = "You've focused on me!";
  console.log(this);
  console.log(event.target);
}
firstname.addEventListener('focus', capitalizeEverything);
